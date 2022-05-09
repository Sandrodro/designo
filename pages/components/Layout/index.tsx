import Header from "../Header";
import Footer from "../Footer";

interface AppProps {
  children: React.ReactNode;
}

function Layout({ children }: AppProps): JSX.Element {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
