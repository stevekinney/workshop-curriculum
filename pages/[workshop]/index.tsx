import { GetStaticPaths, GetStaticProps } from "next";

import { getDirectories, getDocuments } from "../../lib/documents";

export default () => null;

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
  const directory = context.params?.workshop as string;
  const documents = await getDocuments(directory);
  const [first] = documents;

  return {
    redirect: {
      destination: `/${directory}/${first.slug}`,
      permanent: true,
    },
  };
};
