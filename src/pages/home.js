import React from "react";
import Slider from "../components/slider";
const Home = () => {
  return (
    <>
      <div className="flex p-8">
        <div className="w-1/5 flex flex-col justify-center  items-center">
          <p className="text-3xl font-bold">Mon super slogan</p>
          <button className="w-32 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-5/5" style={{marginTop:"100px", width:"10rem"}}>
            Click Me
          </button>
        </div>

        <div className="w-4/5 pl-32">
          <Slider />
        </div>
      </div>
    </>
  );
};

export default Home;
