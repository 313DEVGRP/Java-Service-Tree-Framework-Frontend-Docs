import { join, resolve } from 'node:path';

import type { BuildFlags } from '@affine/cli/config';
import HTMLPlugin from 'html-webpack-plugin';
import { merge } from 'webpack-merge';

import { createConfiguration, rootPath } from './config.js';
import { getRuntimeConfig } from './runtime-config.js';

const DESCRIPTION = `There can be more than Notion and Miro. AFFiNE is a next-gen knowledge base that brings planning, sorting and creating all together.`;

export function createWebpackConfig(cwd: string, flags: BuildFlags) {
  console.log('build flags', flags);
  const runtimeConfig = getRuntimeConfig(flags);
  console.log('runtime config', runtimeConfig);
  const config = createConfiguration(cwd, flags, runtimeConfig);
  const entry =
    typeof flags.entry === 'string' || !flags.entry
      ? {
          app: flags.entry ?? resolve(cwd, 'src/index.tsx'),
        }
      : flags.entry;

  const createHTMLPlugin = (entryName = 'app') => {
    return new HTMLPlugin({
      template: join(rootPath, 'webpack', 'template.html'),
      inject: 'body',
      scriptLoading: 'module',
      minify: false,
      chunks: [entryName],
      filename: `${entryName === 'app' ? 'index' : entryName}.html`, // main entry should take name index.html
      templateParameters: {
        DESCRIPTION,
      },
    });
  };

  return merge(config, {
    entry: entry,
    plugins: Object.keys(entry).map(createHTMLPlugin),
  });
}
