import clsx from "clsx";
import Link from "next/link";

const Header = ({ className }: WithClassName) => (
  <header
    className={clsx(
      "bg-slate-50 p-4 text-center md:p-8 md:text-left",
      className
    )}
  >
    <Link href="/react-hooks/01-getting-started">
      <a className="border-b-4 border-slate-600 hover:border-cyan-300">
        <h1 className="text-3xl font-bold">Steve's Workshops</h1>
      </a>
    </Link>
  </header>
);

export default Header;
