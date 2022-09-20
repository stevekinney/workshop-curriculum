import Footer from './footer';
import Header from './header';

const Layout = ({ children }: WithChildren) => {
  return (
    <main className="w-full">
      <Header className="drop-shadow-lg" />
      <div className="w-full h-full">{children}</div>
      <Footer className="sticky bottom-0 w-full" />
    </main>
  );
};

export default Layout;
