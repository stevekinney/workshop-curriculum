import React, { ReactNode, useEffect, useRef } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import {
  getDirectories,
  getDocumentBySlug,
  getDocuments,
} from "../../lib/documents";

import ContentLayout from "../../components/content-layout";

export default ({
  content,
  meta,
  contents,
  workshop,
}: MarkdownDocument & { contents: MarkdownDocument[]; workshop: string }) => {
  useEffect(() => {
    window.Prism.highlightAll();
  }, []);

  return (
    <ContentLayout workshop={workshop} contents={contents}>
      <header>
        <h1>{meta.title}</h1>
      </header>
      <ReactMarkdown>{content}</ReactMarkdown>
    </ContentLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const directories = await getDirectories();

  const paths = [];

  for (const directory of directories) {
    const documents = await getDocuments(directory);
    for (const document of documents) {
      paths.push({
        params: { workshop: directory, slug: document.slug },
      });
    }
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const workshop = context.params?.workshop as string;
  const slug = context.params?.slug as string;

  const post = await getDocumentBySlug(workshop, slug + ".md");
  const contents = await getDocuments(workshop);

  return {
    props: { ...post, contents, workshop },
  };
};
