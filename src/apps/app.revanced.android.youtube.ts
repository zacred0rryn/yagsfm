import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'app.revanced.android.youtube',
  name: 'Youtube Revanced',
  groups: [
    {
      key: 0,
      name: 'Premium - family plan',
      desc: "I'll pass this time",
      snapshotUrls: [
        'https://i.gkd.li/i/20096385',
        'https://i.gkd.li/i/20474845',
      ],
      rules: [
        {
          matches: [
            '@Button <3 ViewGroup < ScrollView <4 ViewGroup < [vid="custom"]',
          ],
        },
        { matches: ['@Button <4 ViewGroup < [vid="custom"]'] },
      ],
    },
  ],
});
