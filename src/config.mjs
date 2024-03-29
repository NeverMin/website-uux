import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'UUX Group',

  origin: 'https://www.uuxgroup.com',
  basePathname: '/',
  trailingSlash: false,

  title: 'UUX Group',
  description:
    '🚀 UUX, fly your dream.',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: false, //'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',

  news: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'news', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, news: undefined };
export const NEWS = CONFIG.news;
export const DATE_FORMATTER = CONFIG.dateFormatter;
