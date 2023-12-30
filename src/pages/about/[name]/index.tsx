import Image from "next/image";
import Link from "next/link";
import { IoIosPerson } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";

import fbImg from "../../../assets/Icon/facebook.png";
import gitImg from "../../../assets/Icon/github.png";
import linkedInImg from "../../../assets/Icon/linkedin.png";

import abu_jayedImg from "../../../assets/about/1694499760578.png";
import emonImg from "../../../assets/about/emon.jpg";
import { employeeData } from "./data";
import { usePathname } from "next/navigation";

const EmployeeDetails = ({ params }) => {
  const router = usePathname();
  const employeeName = router?.split("/").pop()?.toLowerCase();
  const data = employeeData;
  let abuJayed = data[0];
  let ashikurRahman = data[1];
  let singleEmployeeData;
  let employeeImg = abu_jayedImg;
  if (abuJayed.name.toLowerCase() == employeeName) {
    singleEmployeeData = abuJayed;
    employeeImg = abu_jayedImg;
  } else if (ashikurRahman.name.toLowerCase() == employeeName) {
    singleEmployeeData = ashikurRahman;
    employeeImg = emonImg;
  }

  return (
    <section className="max-w-5xl mx-auto">
      {/* name intro */}
      <div className="pb-20 bg-[#F2F8FF]">
        <div className="pl-3 pt-5">
          <span className="  text-[#1E324D] pl-2 rounded-md text-5xl font-bold">
            {singleEmployeeData?.name}
          </span>
          <h1 className="text-[#1E324D] text-xl italic pl-2 mt-2 uppercase font-semibold ">
            {singleEmployeeData?.designation}
          </h1>
        </div>
      </div>
      {/* emplyee details */}
      <section className="sm:grid gap-5 sm:grid-cols-3">
        {/* personal info */}
        <div className="col-span-1">
          <div>
            <div className="bg-blue-600 rounded-t-md p-5  flex items-center justify-center flex-col ">
              <Image
                src={employeeImg}
                alt="abu jayed"
                className="rounded-full"
                height={210}
                width={210}
              ></Image>
              <h1 className="font-bold text-3xl text-white">
                {singleEmployeeData?.name}
              </h1>
              <p className="text-white font-semibold pb-5">
                {singleEmployeeData?.designation}
              </p>
              <div className="flex gap-4">
                <Link href={`${singleEmployeeData?.fbUrl}`}>
                  <Image
                    className="w-10"
                    src={fbImg}
                    alt="facebook icon"
                  ></Image>
                </Link>
                <Link href={`${singleEmployeeData?.githubUrl}`}>
                  <Image
                    className="w-10"
                    src={gitImg}
                    alt="facebook icon"
                  ></Image>
                </Link>
                <Link href={`${singleEmployeeData?.linkedInUrl}`}>
                  <Image
                    className="w-10"
                    src={linkedInImg}
                    alt="facebook icon"
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-4 bg-[#080829] pb-3 rounded-b-md mb-3">
              <div className="flex items-center gap-1 border-b-[1px] border-white">
                <i className="">
                  <IoIosPerson className="w-8 h-8 text-blue-600" />
                </i>
                <h1 className="text-2xl text-white font-bold ">Contact</h1>
              </div>
              {/* phone no */}
              <div className="flex items-center gap-2 text-white">
                <FaPhoneFlip className="w-8 h-8 text-white" />
                <div className="flex flex-col">
                  <p className="text-xl font-semibold">Phone</p>
                  <p className="text-gray-200">{singleEmployeeData?.phoneNo}</p>
                </div>
              </div>
              {/* email address */}
              <div className="flex items-center gap-2 text-white">
                <MdEmail className="w-8 h-8 text-white" />
                <div className="flex flex-col">
                  <p className="text-xl font-semibold">Email</p>
                  <p className="text-gray-200">{singleEmployeeData?.email}</p>
                </div>
              </div>
              {/* address */}
              <div className="flex items-center gap-2 text-white">
                <AiFillHome className="w-8 h-8 text-white" />
                <div className="flex flex-col">
                  <p className="text-xl font-semibold">Address</p>
                  <p className="text-gray-200">{singleEmployeeData?.address}</p>
                </div>
              </div>
              {/* education part */}
              <div className="flex items-center gap-1 border-b-[1px] border-white">
                <i className="">
                  <FaBookOpen className="w-8 h-8 text-blue-600" />
                </i>
                <h1 className="text-2xl text-white font-bold ">Education</h1>
              </div>

              <div className="pb-5 flex items-center gap-2 text-white">
                <FaRegArrowAltCircleRight className="w-8 h-8 text-white" />
                <div className="flex flex-col">
                  <p className=" font-semibold text-gray-300">2019-2022</p>
                  <p className="text-gray-200 text-xl font-bold">SSC</p>
                  <p className="font-semibold text-gray-300">
                    J.D.M. Govt. High School.
                  </p>
                </div>
              </div>
              {/* language part */}
              <div className="flex items-center gap-1 border-b-[1px] border-white">
                <i className="">
                  <FaEarthAmericas className="w-8 h-8 text-blue-600" />
                </i>
                <h1 className="text-2xl text-white font-bold ">Languages</h1>
              </div>
              <p className=" text-xl font-semibold text-white text-center mt-3 mb-6">
                Bangla, English, Hindi
              </p>
            </div>
          </div>
        </div>

        {/* professinal info */}
        <div className="col-span-2">
          {/* about emplyee */}
          <div className="mt-8">
            <div className="flex gap-1">
              <IoPersonCircleSharp className="w-8 h-8 text-blue-600" />
              <p className="text-black font-bold text-xl">Profile Info</p>
            </div>
            <hr className="border" />
            <p className="text-gray-600">{singleEmployeeData?.aboutYou}</p>
          </div>
          {/* work experience */}
          <div className="mt-8">
            <div className="flex gap-1">
              <FaBookOpen className="w-8 h-8 text-blue-600" />
              <p className="text-black font-bold text-xl">Work Experience</p>
            </div>
            <hr className="border" />
            <div className="w-[70%] flex ">
              <FaRegArrowAltCircleRight className="w-8 h-8 text-black" />
              <div className="flex justify-between w-full text-xl font-bold text-gray-600">
                <h1>Front-end Developer</h1>
                <h1>2023-Present</h1>
              </div>
            </div>
            <p className="ml-8 text-[18px] text-gray-600">
              MD Abu Jayed, Front-end Developer at DiginieIt
            </p>
            {/* skills part */}
            <div className="flex gap-1 mt-5">
              <FaEarthAmericas className="w-8 h-8 text-blue-600" />
              <p className="text-black font-bold text-xl">My Skills</p>
            </div>
            <hr className="border" />
            <div className="mt-4 flex gap-3">
              <span className="p-2 bg-gray-500 text-white font-semibold rounded-lg">
                Next.js
              </span>
              <span className="p-2 bg-gray-500 text-white font-semibold rounded-lg">
                Marketing
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default EmployeeDetails;
