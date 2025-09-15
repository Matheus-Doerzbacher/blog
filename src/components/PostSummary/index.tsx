import PostDate from '../PostDate';
import PostHeading from '../PostHeading';

interface PostSummaryProps {
  postHeading?: 'h1' | 'h2';
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
}

export default function PostSummary({
  postLink,
  createdAt,
  title,
  excerpt,
  postHeading = 'h2',
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <PostDate date={createdAt} />

      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
