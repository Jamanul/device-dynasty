import React from "react";
import { FaTv } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { FaMouse } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa";
import { LuWebcam } from "react-icons/lu";

const FeaturedCard = () => {
  const featuresData = [
    {
      name: "Monitor",
      logo: <FiMonitor />,
    },
    {
      name: "TV",
      logo: <FaTv />,
    },
    {
      name: "Computer Mouse",
      logo: <FaMouse />,
    },
    {
      name: "keyboards",
      logo: <FaRegKeyboard />,
    },
    {
      name: "Web cam",
      logo: <LuWebcam />,
    },
  ];
  return (
    <div>
      <h2 className="text-3xl md:text-5xl mt-12">Featured Category</h2>
      <h6 className="text-gray-500 mt-2 text-xl">
        Get Your Desired Product from Featured Category!
      </h6>
      <div className="grid grid-cols-1 gap-2 my-6 md:grid-cols-2 lg:grid-cols-5">
        {featuresData?.map((data) => (
          <div className="p-8 border flex flex-col rounded-2xl items-center justify-center bg-slate-50" key={data.name}>
            <div className="text-5xl">{data.logo}</div>
            <h2 className="text-xl mt-2 text-gray-500"> {data.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCard;
