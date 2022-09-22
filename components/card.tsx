import clsx from 'clsx';
import WithLink from './with-link';

const Card = ({
  children,
  className,
  href,
}: WithHref & WithChildren & WithClassName) => {
  return (
    <WithLink href={href}>
      <article
        className={clsx(
          'group rounded-lg border-2 border-purple-300 bg-purple-50 bg-gradient-to-t from-purple-100 to-purple-50 p-4 text-purple-900 drop-shadow-md transition-all hover:bg-purple-300 hover:drop-shadow-lg',
          className,
        )}
      >
        {children}
      </article>
    </WithLink>
  );
};

export default Card;
