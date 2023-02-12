import Header from "./layout_components/Header";
import Footer from "./layout_components/Footer";

type props = {
  children: React.ReactNode
}

function RootLayout(props: props) {
  const { children } = props
  return (
    <html>
      <head>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </head>
    </html>
  )
}

export default RootLayout