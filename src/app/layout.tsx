import Container from '@/components/Container';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'The Blog - Blog com Next.js',
    template: '%s | The Blog',
  },
  description: 'Descrição do blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body>
        <Container>
          <Header />
          {children}
          <footer>
            <h1 className="text-4xl font-bold text-center py-8">FOOTER</h1>
          </footer>
        </Container>
      </body>
    </html>
  );
}
