import { npmDeprecateRcJsonPath, npmDeprecateRcPath, npmDeprecateRcYamlPath, npmDeprecateRcYmlPath } from '#lib/constants';
import type { Options } from '#lib/interfaces';
import { logVerboseError } from '#lib/logVerbose';
import { fileExistsAsync } from '#lib/promisified';
import { readJson, readYaml } from '#lib/utils';

/**
 * Parses a YAML or JSON options file and merges that with CLI provided options
 * @param cliOptions The base CLI options to merge with the options found in a YAML or JSON file, if any
 * @returns The YAML or JSON file provided options with anything passed through the CLI overriding it.
 */
export async function parseOptionsFile(cliOptions: Options) {
  const npmDeprecateRcExists = await fileExistsAsync(npmDeprecateRcPath);
  const npmDeprecateRcJsonExists = await fileExistsAsync(npmDeprecateRcJsonPath);
  const npmDeprecateRcYmlExists = await fileExistsAsync(npmDeprecateRcYmlPath);
  const npmDeprecateRcYamlExists = await fileExistsAsync(npmDeprecateRcYamlPath);

  let options = cliOptions;

  if (npmDeprecateRcYamlExists || npmDeprecateRcYmlExists) {
    try {
      const fileOptions = await readYaml<Options>(npmDeprecateRcYamlExists ? npmDeprecateRcYamlPath : npmDeprecateRcYmlPath);

      options = {
        ...fileOptions,
        ...options,
        package: [...(fileOptions.package ?? []), ...(options.package ?? [])]
      };
    } catch (error) {
      logVerboseError({
        text: ['Failed to read yaml config file'],
        verbose: options.verbose,
        verboseText: [
          'Attempted to read options file:',
          npmDeprecateRcYamlExists ? npmDeprecateRcYamlPath : npmDeprecateRcYmlPath,
          '',
          'Full error: ',
          (error as Error).message
        ],
        exitAfterLog: true
      });
    }
  } else if (npmDeprecateRcExists || npmDeprecateRcJsonExists) {
    try {
      const fileOptions = await readJson<Options>(npmDeprecateRcExists ? npmDeprecateRcPath : npmDeprecateRcJsonPath);

      options = {
        ...fileOptions,
        ...options,
        package: [...(fileOptions.package ?? []), ...(options.package ?? [])]
      };
    } catch (error) {
      logVerboseError({
        text: ['Failed to read json config file'],
        verbose: options.verbose,
        verboseText: [
          'Attempted to read options file:',
          npmDeprecateRcExists ? npmDeprecateRcPath : npmDeprecateRcJsonPath,
          '',
          'Full error: ',
          (error as Error).message
        ],
        exitAfterLog: true
      });
    }
  }

  return options;
}
