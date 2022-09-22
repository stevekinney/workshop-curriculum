import { GetStaticPaths, GetStaticProps } from 'next';
import { TableOfContents } from '../../components/content-layout';

import { getDirectories, getDocuments } from '../../lib/documents';

export default ({
  workshop,
  contents,
}: {
  workshop: string;
  contents: MarkdownDocument[];
}) => {
  return <TableOfContents contents={contents} workshop={workshop} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const directories = await getDirectories();

  const paths = directories.map((directory) => ({
    params: {
      workshop: directory,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const workshop = context.params?.workshop as string;
  const contents = await getDocuments(workshop);

  return {
    props: {
      workshop,
      contents,
    },
  };
};
