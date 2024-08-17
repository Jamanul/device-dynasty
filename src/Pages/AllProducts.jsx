import React, { useEffect, useState } from "react";
import ProductCard from "../components/Card/ProductCard";
import axios from 'axios';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(false);
  const [sortByDate, setSortByDate] = useState(false);
  const [brand,setBrand] = useState("");
  const [category,setCategory] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10000);
  //const [searchText, setSearchText] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  //console.log(sort)
  //console.log(min,max)
  //to handle price range
  //console.log(products)
  const fetchProducts = async (page = 1) => {
    try {
      const response = await axios.get( `http://localhost:5000/products?sort=${sort ? "acs" : "dsc"}&sortByDate=${
        sortByDate ? "acs" : "dsc"
      }&minPrice=${min}&maxPrice=${max}&brand=${brand}&category=${category}`, {
        params: {
          page, limit: 10
        }
      });
      console.log(response)
      setProducts(response.data.result);
      setCurrentPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
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
  const handleBrand = (event) => {
    const selectedValue = event.target.value;
    //console.log(selectedValue)
    if (selectedValue === "ByteTech") {
      setBrand("ByteTech")
    } 
    if (selectedValue === "TechNest") {
      setBrand("TechNest")
    } 
    if (selectedValue === "TechWare") {
      setBrand("TechWare")
    } 
    if (selectedValue === "GizmoWare") {
      setBrand("GizmoWare")
    } 
    if (selectedValue === "PixelGear") {
      setBrand("PixelGear")
    } 
    
   
  };
  const handleCategory = (event) => {
    const selectedValue = event.target.value;
    //console.log(selectedValue)
    if (selectedValue === "TV") {
      setCategory("TV")
    } 
    if (selectedValue === "Web Cam") {
      setCategory("Web Cam")
    } 
    if (selectedValue === "Monitor") {
      setCategory("Monitor")
    } 
    if (selectedValue === "Keyboard") {
      setCategory("Keyboard")
    } 
    if (selectedValue === "Mouse") {
      setCategory("Mouse")
    } 
   
    
   
  };
  useEffect(() => {
    // fetch(
    //   `http://localhost:5000/products?sort=${sort ? "acs" : "dsc"}&sortByDate=${
    //     sortByDate ? "acs" : "dsc"
    //   }&minPrice=${min}&maxPrice=${max}&brand=${brand}&category=${category}&searchText=${searchText}`,
    //   {
    //     method: "GET",
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     //console.log(data)
    //     setProducts(data);
    //   });
    fetchProducts(currentPage)
  }, [sort,sortByDate,min,max,brand,category,currentPage]);
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
      {/* <div>
            <form action=""><input type="text" placeholder="Search" className="input input-bordered input-info w-full max-w-xs" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button type="button" className="btn bg-primary text-white " >Search</button>
            </form>
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
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
        className="select select-bordered bg-primary btn text-white "
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
      <select
        className="select select-bordered bg-primary btn text-white "
        onChange={handleCategory}
      >
        <option disabled selected>
          Brand
        </option>
        <option value="ByteTech">ByteTech</option>
        <option value="TechNest">TechNest</option>
        <option value="TechWare">TechWare</option>
        <option value="GizmoWare">GizmoWare</option>
        <option value="PixelGear">PixelGear</option>
      </select>
      <select
        className="select select-bordered bg-primary btn text-white "
        onChange={handleCategory}
      >
        <option disabled selected>
          Category
        </option>
        <option value="TV">TV</option>
        <option value="Keyboard">Keyboard</option>
        <option value="Monitor">Monitor</option>
        <option value="Web Cam">Web Cam</option>
        <option value="Mouse">Mouse</option>
      </select>
      </div>
      <div className="grid mt-6 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products?.map((data) => (
          <ProductCard key={data._id} data={data}></ProductCard>
        ))}
      </div>
      <div>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
};

export default AllProducts;
