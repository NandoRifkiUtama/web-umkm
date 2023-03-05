import React from "react";
import { Link } from "react-router-dom";
import Peta from "../components/Peta";
import Potret from "../components/Potret";
import Video from "../components/Video";

const Home = () => {
  return (
    <>
      <section className="w-full h-screen px-6 md:px-8 py-12 relative flex flex-col items-center justify-center md:items-start border-b-2 border-[#1d3456]">
        <div className="absolute w-full h-screen md:top-0 left-0 object-cover z-[-1]">
          <img className="w-full h-full object-cover" src="https://img.freepik.com/free-vector/white-background-with-blue-tech-hexagon_1017-19366.jpg?w=740&t=st=1674911773~exp=1674912373~hmac=9ebc1c9fa5cb34ae8a618acef4a5137aeb8137b780109c855480f05b294470d9" alt="pattern" />
        </div>
        <div className="px-4 py-4 text-center md:text-start">
          <div className="z-5">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-1 text-black">
              Selamat Datang di
            </h1>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-black">
              Website UMKM Kaliajir Lor
            </h1>
          </div>
          <div>
            <Link to="/umkm">
              <button className="px-3 py-2 border bg-[#1d3456] text-white rounded-xl hover:scale-105 duratioon-300 border-white">
                <p>Jelajah UMKM</p>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Peta />
      <Potret />
      <Video />
    </>
  );
};

export default Home;
