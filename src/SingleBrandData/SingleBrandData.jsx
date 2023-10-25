import { useLoaderData } from "react-router-dom";
import CardDetails from "./CardDetails";
import Footer from "../Footer";


const SingleBrandData = () => {
  const cards = useLoaderData()
  return (
    <div>
    
      <div className="grid md:grid-cols-3 gap-4 mt-6 mb-6">
        {
          cards.map(item => <CardDetails key={item._id} item={item}></CardDetails>)
        }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SingleBrandData;