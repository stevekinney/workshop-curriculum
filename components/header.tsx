import clsx from 'clsx';
import Link from 'next/link';
import WithLink from './with-link';

const Header = ({ className }: WithClassName) => (
  <header
    className={clsx(
      'bg-slate-50 p-4 text-center md:p-8 md:text-left',
      className,
    )}
  >
    <WithLink href="/">
      <h1 className="w-fit border-b-4 border-purple-500 text-3xl font-light transition-all hover:border-purple-300">
        Steve's Workshops
      </h1>
    </WithLink>
  </header>
);

export default Header;
