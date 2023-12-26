import React from "react";

const SideCategory = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold">Category</h2>
          <div className="flex justify-between">
            <h2 className="text-2xl">Technology</h2>
            <h2 className=" bg-accent p-1 rounded rounded-lg text-white font-bold text-xl">
              32
            </h2>
          </div>
          <hr />
          <div className="flex justify-between">
            <h2 className="text-2xl">Lifestyle</h2>
            <h2 className=" bg-accent p-1 rounded rounded-lg text-white font-bold text-xl">
              32
            </h2>
          </div>
          <hr />
          <div className="flex justify-between">
            <h2 className="text-2xl">Photography</h2>
            <h2 className=" bg-accent p-1 rounded rounded-lg text-white font-bold text-xl">
              32
            </h2>
          </div>
          <hr />
          <div className="flex justify-between">
            <h2 className="text-2xl">Health & Fitness</h2>
            <h2 className=" bg-accent p-1 rounded rounded-lg text-white font-bold text-xl">
              32
            </h2>
          </div>
          <hr />
          <div className="flex justify-between">
            <h2 className="text-2xl">Business</h2>
            <h2 className=" bg-accent p-1 rounded rounded-lg text-white font-bold text-xl">
              32
            </h2>
          </div>
          <hr />
          <div className="flex justify-between">
            <h2 className="text-2xl">Marketing</h2>
            <h2 className=" bg-accent p-1 rounded rounded-lg text-white font-bold text-xl">
              32
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCategory;
