import clsx from "clsx";
import WithLink from "./with-link";

const Card = ({
  children,
  className,
  href,
}: WithHref & WithChildren & WithClassName) => {
  return (
    <WithLink href={href}>
      <article
        className={clsx(
          "group rounded-lg border-2 bg-stone-50 p-4 transition-all hover:bg-stone-300 hover:shadow-lg",
          className
        )}
      >
        {children}
      </article>
    </WithLink>
  );
};

export default Card;
