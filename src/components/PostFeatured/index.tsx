import PostCoverImage from '../PostCoverImage';
import PostSummary from '../PostSummary';

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

      <PostSummary
        postHeading="h1"
        postLink={postLink}
        createdAt="2025-04-20"
        title="Olha a rotina matinal de pessoas altamente eficazes"
        excerpt="O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO."
      />
    </section>
  );
}
