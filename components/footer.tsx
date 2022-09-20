import clsx from 'clsx';
import Link from 'next/link';

const Footer = ({ className }: WithClassName) => (
  <footer className={clsx(className)}>
    <p className="flex gap-6 px-4 py-6 place-content-around">
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
  </footer>
);

export default Footer;
