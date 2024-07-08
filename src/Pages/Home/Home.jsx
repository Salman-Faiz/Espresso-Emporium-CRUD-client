import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import FollowInsta from "./FollowInsta";
import PopularProducts from "./PopularProducts";
import { PiCoffeeDuotone } from "react-icons/pi";
import { useState } from "react";

const Home = () => {
  const loadCoffees = useLoaderData();
  const [coffees,setCoffees] =useState(loadCoffees);
  // console.log(coffees.length)
  return (
    <div>
      <Banner></Banner>
      <div>
        <div className=" text-center font-customFont space-y-8 py-20 text-yellow-950 bg-PopularBg1 bg-no-repeat bg-left-bottom">
          <p className="text-xl text-yellow-950">--Sip & Savor--</p>
          <h1 className="text-4xl font-bold pb-6">Our Popular Products</h1>
          <Link to={"/addcoffee"}>
            <button className="btn border-2 border-yellow-950 bg-amber-300 text-yellow-950 font-bold">
              Add Coffee <PiCoffeeDuotone className="text-xl"></PiCoffeeDuotone>
            </button>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 md:px-32 bg-PopularBg2 bg-no-repeat bg-right bg-opacity-100">
        {loadCoffees.map((coffee, idx) => (
          <PopularProducts coffee={coffee} key={idx} coffees={coffees} setCoffees={setCoffees}
         ></PopularProducts>
        ))}
      </div>

      <FollowInsta></FollowInsta>
    </div>
  );
};

export default Home;
