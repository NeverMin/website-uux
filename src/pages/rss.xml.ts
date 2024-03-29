import rss from '@astrojs/rss';

import { SITE, NEWS } from '~/config.mjs';
import { fetchPosts } from '~/utils/news';
import { getPermalink } from '~/utils/permalinks';

export const get = async () => {
  if (NEWS.disabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const posts = await fetchPosts();

  return rss({
    title: `${SITE.name}`,
    description: SITE.description,
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.description,
      pubDate: post.publishDate,
    })),

    trailingSlash: SITE.trailingSlash
  });
};
