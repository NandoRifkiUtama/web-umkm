import React, { useState } from "react";
import data from "./data";

const Umkm = () => {
  const [umkm, setUmkm] = useState(data);

  const filterUmkm = (category) => {
    setUmkm(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <section className="w-full h-full px-6 md:px-8 py-12 mt-14 md:mt-24">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
          <p className="font-bold text-xl">Kategori</p>
          <div className="flex justify-between gap-6">
            <p onClick={()=> setUmkm(data)} className="hover:text-[#5879ab] duration- cursor-pointer">
              Semua
            </p>
            <p onClick={()=> filterUmkm("Sembako")} className="hover:text-[#5879ab] duration- cursor-pointer">
              Sembako
            </p>
            <p onClick={()=> filterUmkm("Pakaian")} className="hover:text-[#5879ab] duration- cursor-pointer">
              Pakaian
            </p>
            <p onClick={()=> filterUmkm("Lainnya")} className="hover:text-[#5879ab] duration- cursor-pointer">
              Lainnya
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 items-center gap-6 mt-8">
          {umkm.map((item, index) => (
            <div
              key={index}
              className="w-full rounded-xl border border-black hover:scale-105 duration-300"
            >
              <div className="w-full h-[150px] md:h-[200px] rounded-t-xl border-b border-black">
                <img
                  className="w-full h-full object-cover rounded-t-xl"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="px-3 py-2 flex flex-col gap-2">
                <div>
                  <div className="font-bold text-md px-2 py-1 rounded-xl bg-[#1d3456] text-white">
                    <p>{item.name}</p>
                  </div>
                </div>
                <div className="text-sm md:text-md font-bold">
                  <p>{item.category}</p>
                </div>
                <div className="text-sm md:text-md flex gap-4">
                  <a href={item.phone} target="_blank" rel="noreferrer">
                    <p className="px-2 py-1 border rounded-full border-[#1d3456] 5 duration-300 hover:bg-[#5879ab] hover:text-white">
                      Contact
                    </p>
                  </a>
                  <a href={item.maps} target="_blank" rel="noreferrer">
                    <p className="px-2 py-1 border rounded-full border-[#1d3456] duration-300 hover:bg-[#5879ab] hover:text-white">
                      Maps
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Umkm;
