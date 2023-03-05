import React from "react";
import Footage from "../assets/footage.mkv";

const Video = () => {
  return (
    <section className="w-full h-full px-6 md:px-8 py-12">
      <div className="flex flex-col items-center justify-center ">
        <div className="px-2 py-2 mb-4 font-bold text-xl md:text-2xl lg:text-3xl">
          <h1 className="text-center">Video UMKM Kerajinan Cobek</h1>
        </div>
        <div>
          <video width="300" controls>
            <source src={Footage} />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;
