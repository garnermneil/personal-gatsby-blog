module.exports = {
  siteTitle: 'A blog template',
  siteDescription: 'This is a template for a blog.',
  authorName: 'Neil Garner',
  twitterUsername: 'neilmgarner',
  authorAvatar: 'avatar.jpeg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: ``,
  siteUrl: 'https://maxpou.github.io/',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'abstract-banner.jpg', // file in content/images
  googleAnalyticsId: 'UA-67868977-2',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/baymax.png',
  postsPerPage: 6,
  disqusShortname: '',
  headerTitle: 'Blog template',
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
    {
      label: 'Installation',
      url: '/how-to-install2',
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
        {
          label: 'Installation',
          url: '/how-to-install2',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/maxpou/gatsby-starter-morning-dew',
        },
        {
          label: 'Website',
          url: 'https://www.maxpou.fr',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/_maxpou',
        },
      ],
    },
  ],
}
