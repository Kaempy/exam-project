import Footer from "./footer";
import Header from "./header";

const Index = ({ children }) => {
  return (
    <>
      <Header />
      <div className="wrapper">{children}</div>
      <Footer />
    </>
  );
};

export default Index;
