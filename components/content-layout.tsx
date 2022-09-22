import clsx from "clsx";
import Link from "next/link";
import formatTitle from "../lib/format-title";
import Sidebar from "./sidebar";

const TableOfContents = ({
  workshop = "Contents",
  contents,
  className,
}: WithClassName & { workshop?: string; contents: MarkdownDocument[] }) => {
  return (
    <nav
      className={clsx(
        "mb-8 w-full overflow-hidden rounded-md border-2 border-slate-200 bg-slate-200 shadow-md lg:min-h-fit lg:w-72",
        className
      )}
    >
      <input type="checkbox" className="peer hidden" id="table-of-contents" />
      <label
        className="flex place-content-between items-center p-4 after:content-['⬆️'] peer-checked:after:content-['⬇️'] sm:after:content-[''] sm:peer-checked:after:content-['']"
        htmlFor="table-of-contents"
      >
        <h2 className="text-2xl font-semibold">{formatTitle(workshop)}</h2>
      </label>
      <div className="max-h-0 bg-slate-50 text-slate-800 peer-checked:max-h-fit sm:max-h-fit sm:px-4">
        <ol className="list-decimal py-4 pl-12 md:pl-8">
          {contents.map((document: MarkdownDocument) => (
            <li key={document.slug}>
              <Link href={`/${workshop}/${document.slug}`} key={document.slug}>
                <a className="text-cyan-600 transition-colors hover:text-cyan-500 hover:underline">
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
}: WithChildren & { workshop: string; contents: MarkdownDocument[] }) => {
  return (
    <section className="p-8">
      <div className="items-start gap-8 lg:flex lg:flex-row lg:place-content-around">
        <TableOfContents workshop={workshop} contents={contents} />
        <section className="lg:w-8/12">
          <div className="prose mx-auto">{children}</div>
        </section>
        <Sidebar className="lg:w-60" />
      </div>
    </section>
  );
};

export default ContentLayout;
