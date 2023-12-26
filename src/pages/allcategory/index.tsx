import SideCategory from "@/components/SideMenu/Category";
import Image1 from "../../assets/allCategory/img-1.jpeg";
import Image2 from "../../assets/allCategory/img-2.jpg";

import Image from "next/image";
import SideLatestPost from "@/components/SideMenu/LatestPost";
import Advertisement from "@/components/Advertisement/Advertisement";
const AllCategoryList = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-3  gap-4 m-2">
          {/* first colum */}
          <div className="col-span-1">
            <SideLatestPost />

            <SideCategory />

            <div className="mt-10">
              <Advertisement />
            </div>
          </div>
          {/* last part */}
          <div className="col-span-2 ">
            {/* technology part */}
            <div className="m-4">
              <div className="my-4">
                <Image className="w-full rounded-md" src={Image1} alt="" />
              </div>
              {/* card layout */}
              <div className="grid grid-cols-2 gap-4">
                <div className="card w-96 glass">
                  <figure>
                    <Image className="w-full" src={Image1} alt="Image!" />
                  </figure>
                  <div className="card-body">
                    <div className="card-actions justify-start">
                      <button className="btn btn-primary btn-sm">
                        Classic
                      </button>
                    </div>
                    <h2 className="card-title text-2xl">
                      How to market your Business to grow faster
                    </h2>
                    {/* avatar */}
                    <div className="flex justify-between items-center">
                      <div className="avatar">
                        <div className="w-8 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <Image alt="" src={Image2} />
                        </div>
                      </div>
                      <h2 className="text-xl">Metablog</h2>
                      <h2 className="text-xl">Dec 27, 2023</h2>
                    </div>
                  </div>
                </div>
                <div className="card w-96 glass">
                  <figure>
                    <Image className="w-full" src={Image1} alt="Image!" />
                  </figure>
                  <div className="card-body">
                    <div className="card-actions justify-start">
                      <button className="btn btn-primary btn-sm">
                        Classic
                      </button>
                    </div>
                    <h2 className="card-title text-2xl">
                      How to market your Business to grow faster
                    </h2>
                    {/* avatar */}
                    <div className="flex justify-between items-center">
                      <div className="avatar">
                        <div className="w-8 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <Image alt="" src={Image2} />
                        </div>
                      </div>
                      <h2 className="text-xl">Metablog</h2>
                      <h2 className="text-xl">Dec 27, 2023</h2>
                    </div>
                  </div>
                </div>
                <div className="card w-96 glass">
                  <figure>
                    <Image className="w-full" src={Image1} alt="Image!" />
                  </figure>
                  <div className="card-body">
                    <div className="card-actions justify-start">
                      <button className="btn btn-primary btn-sm">
                        Classic
                      </button>
                    </div>
                    <h2 className="card-title text-2xl">
                      How to market your Business to grow faster
                    </h2>
                    {/* avatar */}
                    <div className="flex justify-between items-center">
                      <div className="avatar">
                        <div className="w-8 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <Image alt=" al" src={Image2} />
                        </div>
                      </div>
                      <h2 className="text-xl">Metablog</h2>
                      <h2 className="text-xl">Dec 27, 2023</h2>
                    </div>
                  </div>
                </div>
                <div className="card w-96 glass">
                  <figure>
                    <Image className="w-full" src={Image1} alt="Image!" />
                  </figure>
                  <div className="card-body">
                    <div className="card-actions justify-start">
                      <button className="btn btn-primary btn-sm">
                        Classic
                      </button>
                    </div>
                    <h2 className="card-title text-2xl">
                      How to market your Business to grow faster
                    </h2>
                    {/* avatar */}
                    <div className="flex justify-between items-center">
                      <div className="avatar">
                        <div className="w-8 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <Image alt="" src={Image2} />
                        </div>
                      </div>
                      <h2 className="text-xl">Metablog</h2>
                      <h2 className="text-xl">Dec 27, 2023</h2>
                    </div>
                  </div>
                </div>
                <div className="card w-96 glass">
                  <figure>
                    <Image className="w-full" src={Image1} alt="Image!" />
                  </figure>
                  <div className="card-body">
                    <div className="card-actions justify-start">
                      <button className="btn btn-primary btn-sm">
                        Classic
                      </button>
                    </div>
                    <h2 className="card-title text-2xl">
                      How to market your Business to grow faster
                    </h2>
                    {/* avatar */}
                    <div className="flex justify-between items-center">
                      <div className="avatar">
                        <div className="w-8 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <Image alt="" src={Image2} />
                        </div>
                      </div>
                      <h2 className="text-xl">Metablog</h2>
                      <h2 className="text-xl">Dec 27, 2023</h2>
                    </div>
                  </div>
                </div>
                <div className="card w-96 glass">
                  <figure>
                    <Image className="w-full" src={Image1} alt="Image!" />
                  </figure>
                  <div className="card-body">
                    <div className="card-actions justify-start">
                      <button className="btn btn-primary btn-sm">
                        Classic
                      </button>
                    </div>
                    <h2 className="card-title text-2xl">
                      How to market your Business to grow faster
                    </h2>
                    {/* avatar */}
                    <div className="flex justify-between items-center">
                      <div className="avatar">
                        <div className="w-8 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <Image alt="" src={Image2} />
                        </div>
                      </div>
                      <h2 className="text-xl">Metablog</h2>
                      <h2 className="text-xl">Dec 27, 2023</h2>
                    </div>
                  </div>
                </div>
                <div className="card w-96 glass">
                  <figure>
                    <Image className="w-full" src={Image1} alt="Image!" />
                  </figure>
                  <div className="card-body">
                    <div className="card-actions justify-start">
                      <button className="btn btn-primary btn-sm">
                        Classic
                      </button>
                    </div>
                    <h2 className="card-title text-2xl">
                      How to market your Business to grow faster
                    </h2>
                    {/* avatar */}
                    <div className="flex justify-between items-center">
                      <div className="avatar">
                        <div className="w-8 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <Image alt="" src={Image2} />
                        </div>
                      </div>
                      <h2 className="text-xl">Metablog</h2>
                      <h2 className="text-xl">Dec 27, 2023</h2>
                    </div>
                  </div>
                </div>
                <div className="card w-96 glass">
                  <figure>
                    <Image className="w-full" src={Image1} alt="Image!" />
                  </figure>
                  <div className="card-body">
                    <div className="card-actions justify-start">
                      <button className="btn btn-primary btn-sm">
                        Classic
                      </button>
                    </div>
                    <h2 className="card-title text-2xl">
                      How to market your Business to grow faster
                    </h2>
                    {/* avatar */}
                    <div className="flex justify-between items-center">
                      <div className="avatar">
                        <div className="w-8 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <Image alt="" src={Image2} />
                        </div>
                      </div>
                      <h2 className="text-xl">Metablog</h2>
                      <h2 className="text-xl">Dec 27, 2023</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-5">
              <button className="btn btn-outline btn-lg">View All Post</button>
            </div>
          </div>
        </div>
        {/*  add */}
        <div className="mt-10">
          <Advertisement />
        </div>
      </div>
    </div>
  );
};

export default AllCategoryList;
