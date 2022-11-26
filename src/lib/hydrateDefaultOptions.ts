import type { Options } from '#lib/interfaces';

/**
 * Hydrates the options object with default values
 * @param parsedOptions The parsed options object
 * @returns The options objects with default values set where they were undefined.
 */
export function hydrateDefaultOptions(parsedOptions: Options) {
  parsedOptions.deprecateDistTag ??= false;
  parsedOptions.message ??= 'This version has been automatically deprecated by @favware/npm-deprecate. Please use a newer version.';
  parsedOptions.package ??= [];

  return parsedOptions;
}
