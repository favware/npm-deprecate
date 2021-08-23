import type { PathLike } from 'fs';
import { lstat } from 'fs/promises';

export const fileExistsAsync = (path: PathLike) =>
	lstat(path)
		.then(() => true)
		.catch(() => false);
