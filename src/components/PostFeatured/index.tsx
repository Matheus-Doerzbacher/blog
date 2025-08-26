import PostCoverImage from '../PostCoverImage';
import PostHeading from '../PostHeading';

export default function PostFeatured() {
  const slug = 'qualquer';
  const postLink = `/post/${slug}`;
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          src: '/images/bryen_0.png',
          alt: 'Titulo do Post',
          width: 1200,
          height: 720,
          priority: true,
        }}
      />

      <div className="flex flex-col gap-4 sm:justify-center">
        <time className="text-slate-600 text-sm" dateTime="2025-04-20">
          20/04/2025 10:00
        </time>

        <PostHeading url={postLink} as="h1">
          Lorem ipsum dolor, sit amet consectetur
        </PostHeading>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          optio veritatis eligendi iusto accusantium sunt aspernatur nihil id
          vel nisi dolores odit, deleniti minima inventore ratione quas
          consectetur non. Amet.
        </p>
      </div>
    </section>
  );
}
