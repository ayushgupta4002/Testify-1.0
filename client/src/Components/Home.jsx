import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import "../CSS/MediaQuery.css";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TesTify</title>
      </Helmet>
      <Navbar />
      <Hero />
      {/* <Subscribe />
      <Faq /> */}
      {/* <RecentEvents/> */}

      <Footer />
    </div>
  );
}

export default Home;
