// eslint-disable-next-line node/no-unpublished-import
import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-angular'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: { 'scope-enum': [0] },
};

module.exports = Configuration;
