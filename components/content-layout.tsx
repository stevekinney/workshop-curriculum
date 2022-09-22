import clsx from 'clsx';
import Link from 'next/link';
import formatTitle from '../lib/format-title';
import Sidebar from './sidebar';

type TableOfContentsProps = WithClassName & {
  workshop?: string;
  contents: MarkdownDocument[];
};

type ContentLayoutProps = WithChildren & {
  workshop: string;
  contents: MarkdownDocument[];
};

export const TableOfContents = ({
  workshop = 'Contents',
  contents,
  className,
}: TableOfContentsProps) => {
  return (
    <nav
      className={clsx(
        'mb-8 overflow-hidden rounded-md border-2 border-purple-300 bg-purple-200 shadow-md',
        className,
      )}
    >
      <input type="checkbox" className="peer hidden" id="table-of-contents" />
      <label
        className="flex place-content-between items-center p-4 after:content-['⬆️'] peer-checked:after:content-['⬇️'] sm:after:content-[''] sm:peer-checked:after:content-['']"
        htmlFor="table-of-contents"
      >
        <h2 className="text-2xl font-semibold">{formatTitle(workshop)}</h2>
      </label>
      <div className="max-h-0 bg-purple-50 text-purple-400 peer-checked:max-h-fit sm:max-h-fit sm:px-4">
        <ol className="list-decimal py-4 pl-12 md:pl-8">
          {contents.map((document: MarkdownDocument) => (
            <li key={document.slug}>
              <Link href={`/${workshop}/${document.slug}`} key={document.slug}>
                <a className="text-purple-900 transition-colors hover:text-purple-700 hover:underline">
                  {document.meta.title}
                </a>
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
  workshop,
}: ContentLayoutProps) => {
  return (
    <section className="p-8">
      <div className="items-start gap-8 lg:flex lg:flex-row lg:place-content-around">
        <TableOfContents
          workshop={workshop}
          contents={contents}
          className="w-full lg:w-3/12"
        />
        <section className="lg:w-7/12">
          <div className="prose mx-auto">{children}</div>
        </section>
        <Sidebar className="lg:w-2/12" />
      </div>
    </section>
  );
};

export default ContentLayout;
