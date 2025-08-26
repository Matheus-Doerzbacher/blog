import clsx from 'clsx';
import Link from 'next/link';

interface PostHeadingProps {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
}

export default function PostHeading({
  children,
  url,
  as: HeadingTag = 'h2',
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: 'text-2xl  sm:text-4xl font-extrabold',
    h2: 'text-2xl  font-bold',
  };

  const commonClasses = '';

  return (
    <HeadingTag className={clsx(headingClassesMap[HeadingTag], commonClasses)}>
      <Link className="hover:text-slate-600 transition-colors" href={url}>
        {children}
      </Link>
    </HeadingTag>
  );
}
