import Link from 'next/link';
import Sidebar from './sidebar';

const ContentLayout = ({
  children,
  contents,
}: WithChildren & { contents: MarkdownDocument[] }) => {
  return (
    <div className="flex gap-4 m-8">
      <nav className="flex flex-col w-72 gap-4">
        <h3 className="font-bold text-2xl">React Hooks</h3>
        <Link href="https://forms.gle/dL5vLPaXMT7S1xHB7">
          <a className="block border-2 bg-yellow-100 border-yellow-300 p-4 text-center">
            Give me your feedback here!
          </a>
        </Link>
        <ol className="list-decimal pl-4">
          {contents.map((document: MarkdownDocument) => (
            <li key={document.slug} className="mb-2">
              <Link href={`/react-hooks/${document.slug}`} key={document.slug}>
                <a className="text-cyan-600">{document.meta.title}</a>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <section className="flex-grow">
        <div className="prose mx-auto">{children}</div>
      </section>
      <Sidebar className="w-80" />
    </div>
  );
};

export default ContentLayout;
