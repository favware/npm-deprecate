import { NodeAuthToken, NpmBaseUrl } from '#lib/constants';
import type { NpmRegistry, Options } from '#lib/interfaces';
import { logVerboseError, logVerboseInfo } from '#lib/logVerbose';
import { fetch, FetchResultTypes, QueryError } from '@sapphire/fetch';
import { isNullish } from '@sapphire/utilities';
import picomatch from 'picomatch';
import npa from 'npm-package-arg';
import npmFetch from 'npm-registry-fetch';

export async function deprecatePackages(options: Options): Promise<void> {
  // Make a constant for all the registry JSON data sets
  const registryJsonFiles: NpmRegistry[] = [];

  // Iterate over all provided packages getting their data
  for (const pkg of options.package ?? []) {
    try {
      const registryData = await fetch<NpmRegistry>(`${NpmBaseUrl}/${pkg.trim()}`, FetchResultTypes.JSON);
      registryJsonFiles.push(registryData);
    } catch (error: unknown) {
      const typedError = error as QueryError;

      // We ignore not found packages for now
      if (typedError.code !== 404) {
        logVerboseError({
          text: ['I was unable to get the information on one of the provided packages'],
          verbose: options.verbose,
          verboseText: [JSON.stringify(typedError)],
          exitAfterLog: true,
          logWithThrownError: true
        });
      }
    }
  }

  // If we have no registry JSON files then throw an error
  if (!registryJsonFiles.length) {
    logVerboseError({
      text: [
        'Looks like the action failed to get the data for any of the provided packages. Are you sure your package names are correct? You can check by manually adding the package name to the URL "https://registry.npmjs.com/". For example "https://registry.npmjs.com/@favware/npm-deprecate"'
      ],
      verbose: options.verbose,
      exitAfterLog: true,
      logWithThrownError: true
    });
  }

  logVerboseInfo([`Found ${registryJsonFiles.length} packages on the NPM registry`]);

  const fetchPromises: Promise<unknown>[] = [];
  let amountVersionsChanged = 0;

  const isVersionMatch = picomatch(options.name, { nocase: true });

  for (const pkg of registryJsonFiles) {
    const distTags = Object.values(pkg['dist-tags']);
    const packageArg = npa(pkg.name);

    for (const version of Object.values(pkg.versions)) {
      if (!isNullish(version.deprecated)) continue;

      if (version.version === pkg['dist-tags'].latest) continue;

      if (!options.deprecateDistTag && distTags.includes(version.version)) continue;

      if (!isVersionMatch(version.version)) continue;

      logVerboseInfo([`Deprecating version ${version.name}@${version.version}`], options.verbose);

      pkg.versions[version.version].deprecated = options.message;
      amountVersionsChanged++;
    }

    if (amountVersionsChanged >= 1) {
      fetchPromises.push(
        npmFetch(`/${encodeURIComponent(pkg.name).replace(/%40/, '@')}`, {
          body: pkg,
          fetchRetries: 2,
          fetchRetryFactor: 10,
          fetchRetryMaxtimeout: 60000,
          fetchRetryMintimeout: 10000,
          ignoreBody: true,
          isFromCI: true,
          method: 'PUT',
          registry: 'https://registry.npmjs.org/',
          spec: packageArg,
          strictSSL: true,
          token: NodeAuthToken,
          userAgent: 'npm/6.14.14 node/v12.22.5 linux x64 workspaces/false',
          retry: {
            retries: 2,
            factor: 10,
            maxTimeout: 60000,
            minTimeout: 10000
          },
          headers: {
            'user-agent': 'npm/6.14.14 node/v12.22.5 linux x64 workspaces/false',
            'npm-command': 'deprecate',
            authorization: `Bearer ${NodeAuthToken}`
          }
        })
      );
    }
  }

  if (fetchPromises.length) {
    try {
      const responses = await Promise.all(fetchPromises);
      logVerboseInfo([`Successfully deprecated packages with responses: ${JSON.stringify(responses)}`]);
    } catch (error) {
      logVerboseError({
        text: [`Got an error while deprecating!`],
        exitAfterLog: true,
        verbose: options.verbose,
        verboseText: [(error as Error).message],
        logWithThrownError: true
      });
    }
  }
}
