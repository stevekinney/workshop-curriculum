import clsx from "clsx";
import Link from "next/link";
import Card from "./card";

const events = [
  {
    title: "React Hooks: Modern State Management",
    date: "Tuesday, September 20, 2022",
    href: "https://www.eventbrite.com/e/413313560987",
  },
  {
    title: "Enough TypeScript to Be Dangerous",
    date: "Thursday, September 22, 2022",
    href: "https://www.eventbrite.com/e/413314303207",
  },
  {
    title: "React && TypeScript: A Love Story",
    date: "Tuesday, October 11, 2022",
    href: "https://www.eventbrite.com/e/413315757557",
  },
  {
    title: "Advanced Component Patterns in React and TypeScript",
    date: "Tuesday, October 18, 2022",
    href: "https://www.eventbrite.com/e/413315928067",
  },
  {
    title: "Redux from the Ground Up",
    date: "Thursday, October 20, 2022",
    href: "https://www.eventbrite.com/e/413317161757",
  },
  {
    title: "React Performance: Fast and Furious",
    date: "Tuesday, October 25, 2022",
    href: "https://www.eventbrite.com/e/413316128667",
  },
  {
    title: "React Performance 2: 2 Fast and 2 Furious",
    date: "Tuesday, November 8, 2022",
    href: "https://www.eventbrite.com/e/416392149127",
  },
  {
    title: "Professional-Grade Redux with React",
    date: "Wednesday, November 9, 2022",
    href: "https://www.eventbrite.com/e/413317643197",
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
  <Card href={href}>
    <article>
      <h3 className="font-semibold text-slate-600">{title}</h3>
      <p className="text-slate-500">{date}</p>
    </article>
  </Card>
);

const Sidebar = ({ className }: WithClassName) => (
  <section className={clsx(className)}>
    <h2 className="mb-4 text-2xl font-bold">Live Workshops</h2>
    <div className="grid grid-cols-1 gap-4 md:grid md:grid-flow-row md:grid-cols-4 lg:grid-cols-1">
      {events.map((event) => (
        <Event key={event.href} {...event} />
      ))}
    </div>
  </section>
);

export default Sidebar;
