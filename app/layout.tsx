import Header from "./layout_components/Header";
import Footer from "./layout_components/Footer";

import './globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}