import React from 'react';
import Image1 from "../../assets/home/HeroSection/img-1.jpeg";
import Image from 'next/image';

const EditorPage = () => {
  return (
    <div>
       <div className="flex justify-between m-2 ">
        <h2 className="font-bold text-4xl">Editor Pick</h2>
        <button className="btn btn-outline">VIEW ALL POST</button>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 mt-5 p-2">
        <div className="flex justify-between m-2 ">
          <div>
            <Image className="w-48 rounded-md " src={Image1} alt=""></Image>
          </div>
          <div className="flex flex-col ps-2 ">
            <h4 className="font-bold text-2xl ">
              Editor Pick thisis the title
            </h4>
            <h1>Dec 27, 3023</h1>
          </div>
        </div>
        <div className="flex justify-between m-2 ">
          <div>
            <Image className="w-48 rounded-md " src={Image1} alt=""></Image>
          </div>
          <div className="flex flex-col ps-2">
            <h4 className="font-bold text-2xl">Editor Pick thisis the title</h4>
            <h1>Dec 27, 2023</h1>
          </div>
        </div>
        <div className="flex justify-between m-2 ">
          <div>
            <Image className="w-48 rounded-md " src={Image1} alt=""></Image>
          </div>
          <div className="flex flex-col ps-2">
            <h4 className="font-bold text-2xl">Editor Pick thisis the title</h4>
            <h1>Dec 27, 2023</h1>
          </div>
        </div>
        <div className="flex justify-between m-2 ">
          <div>
            <Image className="w-48 rounded-md " src={Image1} alt=""></Image>
          </div>
          <div className="flex flex-col ps-2">
            <h4 className="font-bold text-2xl">Editor Pick thisis the title</h4>
            <h1>Dec 27, 2023</h1>
          </div>
        </div>
        <div className="flex justify-between m-2 ">
          <div>
            <Image className="w-48 rounded-md " src={Image1} alt=""></Image>
          </div>
          <div className="flex flex-col ps-2">
            <h4 className="font-bold text-2xl">Editor Pick thisis the title</h4>
            <h1>Dec 27, 2023</h1>
          </div>
        </div>
        <div className="flex justify-between  m-2 ">
          <div>
            <Image className="w-48 rounded-md " src={Image1} alt=""></Image>
          </div>
          <div className="flex flex-col  ps-2">
            <h4 className="font-bold text-2xl">Editor Pick thisis the title</h4>
            <h1>Dec 27, 2023</h1>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default EditorPage;