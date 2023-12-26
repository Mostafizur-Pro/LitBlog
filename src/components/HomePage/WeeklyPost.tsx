import Image from "next/image";
import React from "react";
import Image1 from "../../assets/home/HeroSection/img-1.jpeg";
import Advertisement from "../Advertisement/Advertisement";
import LatestPost from "./LatestPost";
import SideCategory from "../SideMenu/Category";
import SideLatestPost from "../SideMenu/LatestPost";

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

            <Advertisement />

            <LatestPost />
          </div>

          <div className="col-span-1">
            <SideLatestPost />

            <SideCategory />

            <div className="mt-10">
              <Advertisement />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyPost;
