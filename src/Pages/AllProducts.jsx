import React, { useEffect, useState } from "react";
import ProductCard from "../components/Card/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(false);
  const [sortByDate, setSortByDate] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10000);
  //console.log(sort)
  console.log(min,max)
  //to handle price range
  const handlePriceRangeChange = (event) => {
    const selectedValue = event.target.value;
    //console.log(selectedValue)
    if (selectedValue === "0-500") {
      setMin(0);
      setMax(500);
    } 
    if (selectedValue === "500-1000") {
      setMin(500);
      setMax(1000);
    } 
    if (selectedValue === "1000-1500") {
      setMin(1000);
      setMax(1500);
    } 
    if (selectedValue === "1500-2000") {
      setMin(1500);
      setMax(2000);
    } 
    // else if {
    //   setMin(undefined);
    //   setMax(undefined);
    // }
  };
  useEffect(() => {
    fetch(
      `http://localhost:5000/products?sort=${sort ? "acs" : "dsc"}&sortByDate=${
        sortByDate ? "acs" : "dsc"
      }&minPrice=${min}&maxPrice=${max}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        setProducts(data);
      });
  }, [sort, sortByDate,min,max]);
  //console.log(products)
  return (
    <div className="text-center">
      <h2 className="text-5xl">
        Browse Top <span className="text-primary">Tech Products</span>
      </h2>
      <h6 className="text-gray-500 mt-2 text-xl">
        Find the perfect tech products for your needs. Explore our extensive
        collection of the <br /> latest gadgets, devices, and accessories at
        unbeatable prices.
      </h6>
      <div>
        <button
          className="bg-primary btn text-white"
          onClick={() => setSort(!sort)}
        >
          {sort ? "Price: Low to High" : "Price: High to Low"}
        </button>
        <button
          className="bg-primary btn text-white"
          onClick={() => setSortByDate(!sortByDate)}
        >
          {sortByDate ? "Date: oldest first" : "Date: Newest first"}
        </button>
        
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={handlePriceRangeChange}
      >
        <option disabled selected>
          Price Range
        </option>
        <option value="0-500">0-500 $</option>
        <option value="500-1000">500-1000 $</option>
        <option value="1000-1500">1000-1500 $</option>
        <option value="1500-2000">1500-2000 $</option>
      </select>
      </div>
      <div className="grid mt-6 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products?.map((data) => (
          <ProductCard key={data._id} data={data}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
