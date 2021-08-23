import { rm } from 'fs/promises';

const distDir = new URL('../dist/', import.meta.url);

const config = { recursive: true, force: true };
await rm(distDir, config);
