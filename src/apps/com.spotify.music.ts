import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.spotify.music',
  name: 'Spotify',
  groups: [
    {
      key: 0,
      name: 'Banner',
      snapshotUrls: [
        'https://i.gkd.li/i/20098171',
        'https://i.gkd.li/i/20098433',
        'https://i.gkd.li/i/20098919'
      ],
      rules: [
        {
          matches: ['@Button[text="tertiaryCtaDismiss"] <<n [vid="jit_banner_view_tag"]'],
          activityIds: ['com.spotify.music.SpotifyMainActivity'],
        },
      ],
    },
    {
      key: 1,
      name: 'Rater',
      fastQuery: true,
      snapshotUrls: ['https://i.gkd.li/i/20098331'],
      rules: [
        {
          matches: ['@Button <2 View <4 View < View < ViewGroup < [id="android:id/content"]'],
          activityIds: ['com.spotify.apprater.appraterdialog.AppRaterActivity'],
        },
      ],
    },
    {
      key: 2,
      name: 'Popup',
      fastQuery: true,
      snapshotUrls: ['https://i.gkd.li/i/20113560'],
      rules: [
        {
          matches: ['[vid="dismiss_text"]'],
          activityIds: ['com.spotify.music.SpotifyMainActivity'],
        },
      ],
    },
  ],
});
