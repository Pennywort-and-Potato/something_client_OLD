import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Something Client</title>
        <link rel='icon' href='/icon.png' />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
