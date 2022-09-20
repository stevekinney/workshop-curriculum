import clsx from 'clsx';
import Link from 'next/link';

const events = [
  {
    title: 'React Hooks: Modern State Management',
    date: 'Tuesday, September 20, 2022',
    href: 'https://www.eventbrite.com/e/413313560987',
  },
  {
    title: 'Enough TypeScript to Be Dangerous',
    date: 'Thursday, September 22, 2022',
    href: 'https://www.eventbrite.com/e/413314303207',
  },
  {
    title: 'React && TypeScript: A Love Story',
    date: 'Tuesday, October 11, 2022',
    href: 'https://www.eventbrite.com/e/413315757557',
  },
  {
    title: 'Advanced Component Patterns in React and TypeScript',
    date: 'Tuesday, October 18, 2022',
    href: 'https://www.eventbrite.com/e/413315928067',
  },
  {
    title: 'Redux from the Ground Up',
    date: 'Thursday, October 20, 2022',
    href: 'https://www.eventbrite.com/e/413317161757',
  },
  {
    title: 'React Performance: Fast and Furious',
    date: 'Tuesday, October 25, 2022',
    href: 'https://www.eventbrite.com/e/413316128667',
  },
  {
    title: 'React Performance 2: 2 Fast and 2 Furious',
    date: 'Tuesday, November 8, 2022',
    href: 'https://www.eventbrite.com/e/416392149127',
  },
  {
    title: 'Professional-Grade Redux with React',
    date: 'Wednesday, November 9, 2022',
    href: 'https://www.eventbrite.com/e/413317643197',
  },
];

const Event = ({
  title,
  date,
  href,
}: {
  title: string;
  date: string;
  href: string;
}) => (
  <Link href={href}>
    <a className="hover:bg-cyan-50 p-4">
      <article>
        <h3 className="font-semibold text-cyan-600">{title}</h3>
        <p className="text-slate-500">{date}</p>
      </article>
    </a>
  </Link>
);

const Sidebar = ({ className }: WithClassName) => (
  <section className={clsx('flex flex-col gap-4', className)}>
    <h2 className="text-2xl font-bold px-4">Workshops</h2>
    {events.map((event) => (
      <Event key={event.href} {...event} />
    ))}
  </section>
);

export default Sidebar;
