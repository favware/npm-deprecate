export interface Options {
  deprecateDistTag?: boolean;

  message?: string;

  name: string;

  package?: string[];

  verbose?: boolean;
}

export interface NpmRegistry {
  name: string;
  'dist-tags': Record<string, string>;
  versions: Record<string, Version>;
  time: Record<string, string>;
}

export interface Version {
  name: string;
  version: string;
  _id: string;
  deprecated?: string;
}
