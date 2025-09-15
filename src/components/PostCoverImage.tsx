import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface PostCoverImageProps {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
}

export default function PostCoverImage({
  imageProps,
  linkProps,
}: PostCoverImageProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        'w-full h-full overflow-hidden rounded-xl',
        linkProps.className
      )}
    >
      <Image
        {...imageProps}
        className={clsx(
          'h-full w-full group-hover:scale-105 transition object-cover object-center',
          imageProps.className
        )}
        alt={imageProps.alt}
      />
    </Link>
  );
}
