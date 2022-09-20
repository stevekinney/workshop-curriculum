import mdx from '@next/mdx';
import frontmatter from 'remark-frontmatter';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [frontmatter],
    rehypePlugins: [],
  },
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

export default withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/react-hooks',
        permanent: false,
      },
      {
        source: '/react-hooks',
        destination: '/react-hooks/01-getting-started',
        permanent: false,
      },
    ];
  },
});
