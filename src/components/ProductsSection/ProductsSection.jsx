import React, { useEffect, useState } from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import ProductCard from "../Card/ProductCard";

const ProductsSection = () => {
  const [randomProduct, setRandomProduct] = useState([]);
  useEffect(() => {
    fetch("https://device-dynasty-server.vercel.app/products/random", {
      method: "GET",
    })
      .then(res => res.json())
      .then((data) => {
        //console.log(data)
        setRandomProduct(data);
      });
  }, []);
  //console.log(randomProduct);
  return (
    <div>
      <div className="text-center  mt-20">
        <h2 className="text-3xl md:text-5xl">
          Welcome to <span className="text-primary">DEVICE DYNASTY</span>
        </h2>
        <h6 className="text-gray-500 mt-2 text-xl">
          Your Gateway to the Latest Gadgets and Innovations
        </h6>
        <FeaturedCard />
      </div>
      <div className="text-center mt-12">
        <h2 className="text-3xl md:text-5xl">Featured Product</h2>
        <h6 className="text-gray-500 mt-2 text-xl">
          Check & Get Your Desired Product!
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {randomProduct.map((data) => (
            <ProductCard key={data._id} data={data}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
