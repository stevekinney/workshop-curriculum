import clsx from 'clsx';
import Link from 'next/link';

const Header = ({ className }: WithClassName) => (
  <header
    className={clsx(
      'bg-slate-50 text-center md:text-left p-4 md:p-8',
      className,
    )}
  >
    <Link href="/react-hooks/01-getting-started">
      <a className="border-b-4 hover:border-cyan-300 border-slate-600">
        <h1 className="text-3xl font-bold">Steve's Workshops</h1>
      </a>
    </Link>
  </header>
);

export default Header;
