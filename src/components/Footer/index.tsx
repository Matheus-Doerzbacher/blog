import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="pb-8 text-center">
      <p>
        Copyright &copy; {new Date().getFullYear()} -{' '}
        <Link href="/">The Blog</Link>
      </p>
    </footer>
  );
}
