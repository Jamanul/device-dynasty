import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/Card/ProductCard";

const CategoryPage = () => {
  const params = useParams();
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://device-dynasty-server.vercel.app/category?category=${params.id}`)
      .then((data) => setCategoryData(data.data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl">
          Explore Our Top <span className="text-primary">{params.id}</span>
        </h2>
        <h6 className="text-gray-500 mt-2 text-xl">
          Explore a wide range of tech products that bring convenience,
          efficiency, and excitement to your everyday life. <br /> Shop the
          latest trends and breakthroughs in technology.
        </h6>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                categoryData.map(data=><ProductCard data={data} key={data._id}></ProductCard>)
            }
      </div>
    </div>
  );
};

export default CategoryPage;
