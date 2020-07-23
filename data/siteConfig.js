module.exports = {
  siteTitle: 'The Muddled Pensieve',
  siteDescription: `Hi, I'm Neil, a father, husband and full stack developer and these are my meandering thoughts.`,
  authorName: 'Neil Garner',
  twitterUsername: 'neilmgarner',
  authorAvatar: 'avatar.jpeg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: ``,
  siteUrl: 'https://github.com/garnermneil/personal-gatsby-blog',
  disqusSiteUrl: '',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/personal-gatsby-blog', // Note: it must *not* have a trailing slash.
  siteCover: 'splash-banner.jpg', // file in content/images
  googleAnalyticsId: 'UA-67868977-2',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  // icon: 'content/images/baymax.png',
  postsPerPage: 6,
  disqusShortname: '',
  headerTitle: 'The Muddled Pensieve',
  headerLinksIcon: '', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
      ],
    }
    ],
}
