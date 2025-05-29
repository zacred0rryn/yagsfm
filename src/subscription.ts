import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 40609891,
  name: 'YAGS',
  version: 1,
  author: 'zacred0rryn',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/zacred0rryn/yagsfm',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
