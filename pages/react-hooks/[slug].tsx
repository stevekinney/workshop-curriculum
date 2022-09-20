import React, { ReactNode, useEffect, useRef } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import { GetStaticPaths, GetStaticProps } from 'next';
import ContentLayout from '../../components/content-layout';
import { getDocumentBySlug, getDocuments } from '../../lib/documents';
import markdownToHtml from '../../lib/markdown';

export default ({
  content,
  meta,
  contents,
}: MarkdownDocument & { contents: MarkdownDocument[] }) => {
  useEffect(() => {
    window.Prism.highlightAll();
  }, []);

  return (
    <ContentLayout contents={contents}>
      <header>
        <h1>{meta.title}</h1>
      </header>
      <ReactMarkdown>{content}</ReactMarkdown>
    </ContentLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getDocuments();

  const paths = data.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const post = await getDocumentBySlug(slug + '.md');
  const content = await markdownToHtml(post.content || '');

  const contents = await getDocuments();

  return {
    props: { ...post, contents },
  };
};
