import { join } from 'path';
import { URL } from 'url';

/** The root directory of the CLI tool */
export const cliRootDir = new URL('../../', import.meta.url);

/** Current working directory from which the script is called */
export const packageCwd = process.cwd();

/** Path to the config file in proprietary format */
export const npmDeprecateRcPath = join(packageCwd, '.npm-deprecaterc');

/** Path to the config file in .json format */
export const npmDeprecateRcJsonPath = `${npmDeprecateRcPath}.json`;

/** Path to the config file in .yml format */
export const npmDeprecateRcYmlPath = `${npmDeprecateRcPath}.yml`;

/** Path to the config file in .yaml format */
export const npmDeprecateRcYamlPath = `${npmDeprecateRcPath}.yaml`;

/** 4 spaces indent for logging */
export const indent = ' '.repeat(4);

/** The base URL for the NPM API */
export const NpmBaseUrl = 'https://registry.npmjs.com';

/** The Node Auth token to set for authorization */
export const NodeAuthToken = process.env.NODE_AUTH_TOKEN;
