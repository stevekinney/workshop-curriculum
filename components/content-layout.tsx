import Link from 'next/link';
import Sidebar from './sidebar';

const TableOfContents = ({ contents }: { contents: MarkdownDocument[] }) => {
  return (
    <nav className="rounded-md overflow-hidden border-2 border-slate-200 bg-slate-200 w-full lg:w-72 lg:min-h-fit shadow-md mb-8">
      <input type="checkbox" className="peer hidden" id="table-of-contents" />
      <label
        className="flex p-4 place-content-between items-center peer-checked:after:content-['⬇️'] after:content-['⬆️'] sm:after:content-[''] sm:peer-checked:after:content-['']"
        htmlFor="table-of-contents"
      >
        <h2 className="font-semibold text-2xl">React Hooks</h2>
      </label>
      <div className="sm:px-4 max-h-0 sm:max-h-fit peer-checked:max-h-fit bg-slate-50 text-slate-800">
        <ol className="list-decimal pl-12 md:pl-8 py-4">
          {contents.map((document: MarkdownDocument) => (
            <li key={document.slug}>
              <Link href={`/react-hooks/${document.slug}`} key={document.slug}>
                <a className="text-cyan-600">{document.meta.title}</a>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

const ContentLayout = ({
  children,
  contents,
}: WithChildren & { contents: MarkdownDocument[] }) => {
  return (
    <section className="p-8">
      <div className="lg:flex lg:flex-row gap-8 items-start lg:place-content-around">
        <TableOfContents contents={contents} />
        <section>
          <div className="prose mx-auto">{children}</div>
        </section>
        <Sidebar className="lg:w-60" />
      </div>
    </section>
  );
};

export default ContentLayout;
