import React from "react";
import { Link } from "react-router-dom";
import umkm1 from "../assets/images/umkm-1.jpg";
import umkm2 from "../assets/images/umkm-2.jpg";
import umkm3 from "../assets/images/umkm-3.jpg";
import umkm4 from "../assets/images/umkm-4.jpg";
import umkm5 from "../assets/images/umkm-5.jpg";
import umkm6 from "../assets/images/umkm-6.jpg";
import umkm7 from "../assets/images/umkm-7.jpg";
import umkm8 from "../assets/images/umkm-8.jpg";

const Potret = () => {
  const ImageData = [umkm1, umkm2, umkm3, umkm4, umkm5, umkm6, umkm7, umkm8];
  return (
    <section className="w-full h-full md:h-screen px-6 md:px-8 py-12">
      <div className="flex flex-col items-center">
        <div className="font-bold px-2 py-2 text-xl md:text-2xl lg:text-3xl mb-4">
          <h1>Potret UMKM</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-5 px-4">
          {ImageData.map((item, index) => (
            <Link to="umkm">
              <div
                key={index}
                className="w-full h-full relative rounded-xl hover:scale-105 duration-300"
              >
                <div className="rounded-xl">
                  <img className="rounded-xl" src={item} alt={item.name} />
                </div>
                <div className="w-full h-full absolute top-0 left-0 bg-black/30 rounded-xl"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Potret;
