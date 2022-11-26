import { NodeAuthToken } from '#lib/constants';
import type { Options } from '#lib/interfaces';
import { logVerboseError } from '#lib/logVerbose';
import { isNullish, isNullishOrEmpty } from '@sapphire/utilities';

export function checks(options: Options): void {
  // First we check if a token was provided, and exit out if none was provided.
  if (isNullish(NodeAuthToken)) {
    logVerboseError({
      text: ['You did not provide an NODE_AUTH_TOKEN environment variable to use.'],
      verbose: options.verbose,
      exitAfterLog: true
    });
  }

  // If no packages are provided then we throw an error
  if (!options.package?.length) {
    logVerboseError({
      text: ['You did not provide a list of packages to deprecate. Use npm-deprecate --help to find out more.'],
      verbose: options.verbose,
      exitAfterLog: true
    });
  }

  // If they are all nullish or empty then we throw
  if (isNullishOrEmpty(options.name)) {
    logVerboseError({
      text: ['You did not provide a name glob pattern to match on. Use npm-deprecate --help to find out more.'],
      verbose: options.verbose,
      exitAfterLog: true
    });
  }
}
