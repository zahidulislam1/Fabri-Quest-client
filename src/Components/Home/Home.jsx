import Banner from "./Banner";
import ProductCard from "../Shared/ProductCard";
import Brands from "./Brands";
import Reviews from "./Reviews";
import GarmentSection from "../Shared/GarmentSection";
import SubscriptionSection from "../Shared/SubscriptionSection";

const reviewsPromise = fetch("/reviewsData.json").then((res) => res.json());
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ProductCard></ProductCard>
      <div className="my-4 md:my-7">
        <Brands></Brands>
      </div>
      <GarmentSection></GarmentSection>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <SubscriptionSection></SubscriptionSection>
    </div>
  );
};

export default Home;
