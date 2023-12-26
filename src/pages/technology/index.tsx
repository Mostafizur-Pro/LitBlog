import Advertisement from "@/components/Advertisement/Advertisement";

import SideCategory from "@/components/SideMenu/Category";
import SideLatestPost from "@/components/SideMenu/LatestPost";
import SinglePage from "@/components/TechnologyPage/singlePage";

const Technology = () => {
  return (
    <div>
      <div className="grid grid-cols-3  gap-4 m-2">
        {/* first colum */}
        <div className="col-span-2 ">
          <SinglePage />
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
  );
};

export default Technology;
