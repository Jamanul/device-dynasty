import React, { useEffect, useState } from "react";
import ProductCard from "../components/Card/ProductCard";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/products", {
        method: "GET",
      })
        .then(res => res.json())
        .then((data) => {
          //console.log(data)
          setProducts(data);
        });
    }, []);
    console.log(products)
  return (
    <div className="text-center">
      <h2 className="text-5xl">
        Browse Top <span className="text-primary">Tech Products</span>
      </h2>
      <h6 className="text-gray-500 mt-2 text-xl">
        Find the perfect tech products for your needs. Explore our extensive
        collection of the <br /> latest gadgets, devices, and accessories at unbeatable
        prices.
      </h6>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                products?.map(data=><ProductCard key={data._id} data={data}></ProductCard>)
            }
      </div>
    </div>
  );
};

export default AllProducts;
