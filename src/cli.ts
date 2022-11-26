#!/usr/bin/env node

import { checks } from '#commands/checks';
import { deprecatePackages } from '#commands/deprecate';
import { cliRootDir, indent } from '#lib/constants';
import { hydrateDefaultOptions } from '#lib/hydrateDefaultOptions';
import { logVerboseInfo } from '#lib/logVerbose';
import { parseOptionsFile } from '#lib/optionsParser';
import { doActionAndLog } from '#lib/utils';
import { Command } from 'commander';
import { readFile } from 'fs/promises';
import { URL } from 'url';

const packageFile = new URL('package.json', cliRootDir);
const packageJson = JSON.parse(await readFile(packageFile, 'utf-8'));

const command = new Command()
  .version(packageJson.version)
  .option(
    '-n, --name <nameGlob>',
    'A glob pattern that will determine which packages are deprecated. Anything that passes [Micromatch](https://www.npmjs.com/package/micromatch) will work here. For example set `*dev*` to match `13.2.0-dev.123a`.'
  )
  .option(
    '-d, --deprecate-dist-tag [deprecateDistTag]',
    'Whether the version that is in the current dist tags should be preserved or not. By default dist tags are preserved. When set to `true`, dist tags are pruned.'
  )
  .option('-m, --message [message]', 'A custom message to show for all the deprecated versions.')
  .option('-v, --verbose', 'Print verbose information', false)
  .option(
    '-p, --package <packages...>',
    `Repeatable, each will be treated as another package. The packages that should be deprecated`,
    (value: string, previous: string[]) => previous.concat([value])
  );

const program = command.parse(process.argv);
let options = await parseOptionsFile(program.opts());
options = hydrateDefaultOptions(options);

logVerboseInfo(
  [
    'Resolved options: ',
    `${indent}packages: ${JSON.stringify(options.package)}`,
    `${indent}name glob: ${JSON.stringify(options.name)}`,
    `${indent}deprecate dist tag: ${JSON.stringify(options.deprecateDistTag)}`,
    `${indent}message: ${JSON.stringify(options.message)}`,
    `${indent}verbose: ${JSON.stringify(options.verbose)}`,
    ''
  ],
  options.verbose
);

/**
|----------------------------|
| Checks the inputs provided |
|----------------------------|
*/
await doActionAndLog('Checking your input', checks(options));

/**
|--------------------|
| Deprecate packages |
|--------------------|
*/
await doActionAndLog('Deprecating versions', deprecatePackages(options));
