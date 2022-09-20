import Link from 'next/link';
import { join } from 'path';

export default function Index({
  documents,
  directory,
}: {
  documents: MarkdownDocument[];
  directory: string;
}) {
  return (
    <section>
      <h1>React Hooks</h1>
      <nav className="flex flex-col">
        {documents.map((document: MarkdownDocument) => (
          <Link href={`${directory}/${document.slug}`} key={document.slug}>
            <a>{document.meta.title}</a>
          </Link>
        ))}
      </nav>
    </section>
  );
}

export async function getStaticProps() {
  const directory = 'react-hooks';
  const { getDocuments } = await import('../../lib/documents');
  const documents = await getDocuments();

  return {
    props: {
      directory,
      documents,
    },
  };
}
