import Banner from "../components/banner";
import Navbar from "../components/navbar";
import Carts from "../components/carts";
import Menu from "../components/menu";
import Footer from "../components/footer";

import "./home.css";

function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#FAF7F2" }}>
        <Banner />
        <Navbar />
        <Carts />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default Home;
