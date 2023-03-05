import React from "react";
import Poster from "./Poster.js";

const Art = () => {
  return (
    <section className="w-full h-full px-6 md:px-8 py-12 mt-12">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 items-center gap-6 mt-8">
        {Poster.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-xl border border-black hover:scale-105 duration-300"
          >
            <div className="w-full h-[300px] md:h-[400px] rounded-t-xl border-b border-black">
              <img
                className="w-full h-full object-cover rounded-t-xl"
                src={item.image}
                alt="poster"
              />
            </div>
            <div className="px-3 py-2 flex flex-col gap-2 items-center">
              <a href={item.url} target="_blank" rel="noreferrer">
                <div className="text-sm md:text-md flex gap-4">
                  <p className="px-2 py-1 border rounded-full border-[#1d3456] 5 duration-300 hover:bg-[#5879ab] hover:text-white">
                    Lihat Poster
                  </p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Art;
