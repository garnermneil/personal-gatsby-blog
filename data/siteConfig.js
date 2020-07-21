module.exports = {
  siteTitle: 'A view from a hill',
  siteDescription: 'This is my meandering blog.',
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
  icon: 'content/images/baymax.png',
  postsPerPage: 6,
  disqusShortname: '',
  headerTitle: 'A view from a hill',
  headerLinksIcon: '', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/all-about-this-blog',
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
        {
          label: 'About',
          url: '/all-about-this-blog',
        },
      ],
    }
    ],
}
