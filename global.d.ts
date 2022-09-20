type WithClassName = {
  className?: string;
};

type WithChildren = {
  children?: React.ReactNode;
};

type MarkdownDocument = {
  slug: string;
  meta: Record<string, string>;
  content: string;
};
