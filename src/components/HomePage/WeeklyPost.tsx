import Image from "next/image";

import React from "react";
import Image1 from "../../assets/home/HeroSection/img-1.jpeg";
import CategoryPage from "./Category";
import Advertisement from "../Advertisement/Advertisement";
import LatestPost from "./LatestPost";

const WeeklyPost = () => {
  return (
    <div>
      {/* weekly post */}
      <div className="m-2">
        <div className="grid grid-cols-3  gap-4">
          {/* weekly post image*/}

          <div className="col-span-2">
            <div className="flex justify-between m-2 ">
              <h2 className="font-bold text-4xl">Weekly Post</h2>
              <button className="btn btn-outline">VIEW ALL POST</button>
            </div>
            <div className="m-2">
              <Image className="w-full rounded-md" src={Image1} alt="" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between items-center m-2 ">
                <div>
                  <Image className="w-48 rounded-md " src={Image1} alt="" />
                </div>
                <div className="flex flex-col ps-2 ">
                  <h4 className="font-bold text-2xl ">
                    Editor Pick thisis the title
                  </h4>
                  <h1>Dec 27, 2023</h1>
                </div>
              </div>

              <div className="flex justify-between items-center m-2 ">
                <div>
                  <Image className="w-48 rounded-md " src={Image1} alt="" />
                </div>
                <div className="flex flex-col ps-2 ">
                  <h4 className="font-bold text-2xl ">
                    Editor Pick thisis the title
                  </h4>
                  <h1>Dec 27, 2023</h1>
                </div>
              </div>

              <div className="flex justify-between items-center m-2 ">
                <div>
                  <Image className="w-48 rounded-md " src={Image1} alt="" />
                </div>
                <div className="flex flex-col ps-2 ">
                  <h4 className="font-bold text-2xl ">
                    Editor Pick thisis the title
                  </h4>
                  <h1>Dec 27, 2023</h1>
                </div>
              </div>

              <div className="flex justify-between items-center m-2 ">
                <div>
                  <Image className="w-48 rounded-md " src={Image1} alt="" />
                </div>
                <div className="flex flex-col ps-2 ">
                  <h4 className="font-bold text-2xl ">
                    Editor Pick thisis the title
                  </h4>
                  <h1>Dec 27, 2023</h1>
                </div>
              </div>

              <div className="flex justify-between items-center m-2 ">
                <div>
                  <Image className="w-48 rounded-md " src={Image1} alt="" />
                </div>
                <div className="flex flex-col ps-2 ">
                  <h4 className="font-bold text-2xl ">
                    Editor Pick thisis the title
                  </h4>
                  <h1>Dec 27, 2023</h1>
                </div>
              </div>

              <div className="flex justify-between items-center m-2 ">
                <div>
                  <Image className="w-48 rounded-md " src={Image1} alt="" />
                </div>
                <div className="flex flex-col ps-2 ">
                  <h4 className="font-bold text-2xl ">
                    Editor Pick thisis the title
                  </h4>
                  <h1>Dec 27, 2023</h1>
                </div>
              </div>
            </div>
            {/* add section */}
            {/* <div className="bg-slate-300 h-32 m-12 p-8 rounded-lg text-center text-white">
              <p>Advertisement</p>
              <h4 className="font-bold text-2xl ">You can place add </h4>
              <p>750*1200</p>
            </div> */}
            <Advertisement/>
            {/* another latest */}
            <LatestPost/>
            {/* another add */}
            {/* <div className="bg-slate-300 h-32 m-12 p-8 rounded-lg text-center text-white">
              <p>Advertisement</p>
              <h4 className="font-bold text-2xl ">You can place add </h4>
              <p>750*1200</p>
            </div> */}
            {/* <Advertisement/> */}
          </div>

          {/* latest post */}
          <div className="col-span-1">
            <h2 className="font-bold text-4xl m-4">latest Post</h2>

            <div className="flex justify-between items-center m-2 ">
              <div>
                <Image className="w-48 rounded-md " src={Image1} alt="" />
              </div>
              <div className="flex flex-col ps-2 ">
                <h4 className="font-bold text-2xl ">
                  Editor Pick thisis the title
                </h4>
                <h1>Dec 27, 2023</h1>
              </div>
            </div>

            <div className="flex justify-between items-center m-2 ">
              <div>
                <Image className="w-48 rounded-md " src={Image1} alt="" />
              </div>
              <div className="flex flex-col ps-2 ">
                <h4 className="font-bold text-2xl ">
                  Editor Pick thisis the title
                </h4>
                <h1>Dec 27, 2023</h1>
              </div>
            </div>

            <div className="flex justify-between items-center m-2 ">
              <div>
                <Image className="w-48 rounded-md " src={Image1} alt="" />
              </div>
              <div className="flex flex-col ps-2 ">
                <h4 className="font-bold text-2xl ">
                  Editor Pick thisis the title
                </h4>
                <h1>Dec 27, 2023</h1>
              </div>
            </div>

            <div className="flex justify-between items-center m-2 ">
              <div>
                <Image className="w-48 rounded-md " src={Image1} alt="" />
              </div>
              <div className="flex flex-col ps-2 ">
                <h4 className="font-bold text-2xl ">
                  Editor Pick thisis the title
                </h4>
                <h1>Dec 27, 2023</h1>
              </div>
            </div>

            <div className="flex justify-between items-center m-2 ">
              <div>
                <Image className="w-48 rounded-md " src={Image1} alt="" />
              </div>
              <div className="flex flex-col ps-2 ">
                <h4 className="font-bold text-2xl ">
                  Editor Pick thisis the title
                </h4>
                <h1>Dec 27, 2023</h1>
              </div>
            </div>

            <div className="flex justify-between items-center m-2 ">
              <div>
                <Image className="w-48 rounded-md " src={Image1} alt="" />
              </div>
              <div className="flex flex-col ps-2 ">
                <h4 className="font-bold text-2xl ">
                  Editor Pick thisis the title
                </h4>
                <h1>Dec 27, 2023</h1>
              </div>
            </div>
            {/* category */}
           <CategoryPage/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyPost;
