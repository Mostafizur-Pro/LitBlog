import Image from "next/image";
import banner from "@/assets/images/home/2.png";

const OurService = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-5 gap-10">
        <div className="col-span-2 ">
          <h1 className="text-5xl mb-2 font-semibold">Our Services </h1>

          <p>
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <Image
            src={banner}
            className="rounded-lg w-[70%] "
            alt="motherboard"
          />
        </div>
        <div className="col-span-3">
          <div className="flex item-center justify-center gap-10 mb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="32"
                viewBox="0 0 512 512"
              >
                <path d="M87 481.8h73.7v-73.6H87zM25.4 346.6v61.6H87v-61.6zm466.2-169.7c-23-74.2-82.4-133.3-156.6-156.6C164.9-32.8 8 93.7 8 255.9h95.8c0-101.8 101-180.5 208.1-141.7 39.7 14.3 71.5 46.1 85.8 85.7 39.1 107-39.7 207.8-141.4 208v.3h-.3V504c162.6 0 288.8-156.8 235.6-327.1zm-235.3 231v-95.3h-95.6v95.6H256v-.3z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold">Digital Marketing</h1>
              <p>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="flex item-center justify-center gap-10 mb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="32"
                viewBox="0 0 512 512"
              >
                <path d="M87 481.8h73.7v-73.6H87zM25.4 346.6v61.6H87v-61.6zm466.2-169.7c-23-74.2-82.4-133.3-156.6-156.6C164.9-32.8 8 93.7 8 255.9h95.8c0-101.8 101-180.5 208.1-141.7 39.7 14.3 71.5 46.1 85.8 85.7 39.1 107-39.7 207.8-141.4 208v.3h-.3V504c162.6 0 288.8-156.8 235.6-327.1zm-235.3 231v-95.3h-95.6v95.6H256v-.3z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold">Social Media</h1>
              <p>
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="flex item-center justify-center gap-10 mb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="32"
                viewBox="0 0 512 512"
              >
                <path d="M87 481.8h73.7v-73.6H87zM25.4 346.6v61.6H87v-61.6zm466.2-169.7c-23-74.2-82.4-133.3-156.6-156.6C164.9-32.8 8 93.7 8 255.9h95.8c0-101.8 101-180.5 208.1-141.7 39.7 14.3 71.5 46.1 85.8 85.7 39.1 107-39.7 207.8-141.4 208v.3h-.3V504c162.6 0 288.8-156.8 235.6-327.1zm-235.3 231v-95.3h-95.6v95.6H256v-.3z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold">SEO Services</h1>
              <p>
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="flex item-center justify-center gap-10 mb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="32"
                viewBox="0 0 512 512"
              >
                <path d="M87 481.8h73.7v-73.6H87zM25.4 346.6v61.6H87v-61.6zm466.2-169.7c-23-74.2-82.4-133.3-156.6-156.6C164.9-32.8 8 93.7 8 255.9h95.8c0-101.8 101-180.5 208.1-141.7 39.7 14.3 71.5 46.1 85.8 85.7 39.1 107-39.7 207.8-141.4 208v.3h-.3V504c162.6 0 288.8-156.8 235.6-327.1zm-235.3 231v-95.3h-95.6v95.6H256v-.3z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold">Digital Marketing</h1>
              <p>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
