import React from "react";
import Image from "next/image";
import { happymotherandchild, holistic } from "@/public/assets";

const Holistic = () => {
  return (
    <main className="mx-auto w-full mt-[140px]">
      <div className=" text-center">
        <h1 className="max-w-[352px] mx-auto text-[32px] lg:text-[64px] font-bold leading-none lg:max-w-[1028px]">
          Mastermind's Holistic Support for Women and Children
        </h1>

        <p className="max-w-[352px] lg:max-w-[1181px] mx-auto text-[14px] lg:text-[24px] mt-[20px]">
          Mastermind is committed to the quality care of women and children, and
          we want to see other women and children experience positive
          self-growth in all areas of life. Although Mastermind is faith based,
          we do offer a purely secular track for all other services excluding
          spiritual. Spiritual services are there for those who choose to use
          them, but they are not a requirement to be approved for our women and
          children’s transitional housing.
        </p>

        <div className="lg:w-[195px] lg:h-[74px] w-[121px] h-[45px] rounded-full bg-green-500 flex items-center justify-center mb-22 mx-auto mt-[28px]">
          {" "}
          {/* Add margin-bottom to create space */}
          <p className="text-[14px] lg:text-2xl">Apply Now</p>
        </div>

        <div className="relative mx-auto max-w-[352px] lg:max-w-[1300px] mt-[90px]">
          <div className="rounded-xl  overflow-hidden h-[418px] lg:object-contain">
            <Image
              src={holistic}
              alt="different women"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Holistic;
