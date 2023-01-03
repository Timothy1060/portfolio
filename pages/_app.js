import "../styles/globals.css";

import Footer from "../components/footer";
import Navigation from "./../components/navigation/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
