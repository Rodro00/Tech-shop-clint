import Brands from "../Brands/Brands";
import Footer from "../Footer";
import Mobiles from "../Mobiles";
import NewProduct from "../NewProduct/NewProduct";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <Mobiles></Mobiles>
      <NewProduct></NewProduct>
      <Footer></Footer>
    </div>
  );
};

export default Home;