import clsx from 'clsx';
import Link from 'next/link';

const Header = ({ className }: WithClassName) => (
  <header
    className={clsx(
      'bg-slate-900 text-white flex flex-row p-8 sticky place-content-between items-center',
      className,
    )}
  >
    <Link href="/react-hooks/01-getting-started">
      <a className="border-b-4 hover:border-cyan-300 border-slate-600">
        <h1 className="text-3xl font-bold">Steve's Workshops</h1>
      </a>
    </Link>
    <div>
      <p className="flex gap-6 px-4 py-6">
        <Link href="https://twitter.com/stevekinney">
          <a className="border-b-4 hover:border-cyan-300 border-slate-600">
            <strong>@stevekinney</strong> on Twitter
          </a>
        </Link>
        <Link href="https://github.com/stevekinney">
          <a className="border-b-4 hover:border-cyan-300 border-slate-600">
            <strong>@stevekinney</strong> on Github
          </a>
        </Link>
      </p>
    </div>
  </header>
);

export default Header;
