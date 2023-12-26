import Image from "next/image";
import banner from "@/assets/images/home/1.png";

const HomeBanner = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-5 ">
        <div className="col-span-2 my-10">
          <p className="text-[#38c3c7] font-bold">DIGITAL BUSINESS</p>
          <h1 className="text-5xl my-2 font-semibold">Marketing </h1>
          <h1 className="text-5xl my-2 font-semibold">Strategy </h1>
          <p>
            Speak with a results specialist today to get started with SEO, PPC,
            social media, web design & more.
          </p>
        </div>
        <div className="col-span-3">
          <Image
            src={banner}
            className="rounded-lg w-[70%] "
            alt="motherboard"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
