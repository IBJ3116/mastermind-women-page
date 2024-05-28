import React from "react";
import { section2img, transitionalhousing } from "@/public/assets";
import Image from "next/image";

const Section2 = () => {
  return (
    <main className="relative mt-[140px] mx-auto max-w-[352px] lg:max-w-[1301px] lg:px-4">
      {" "}
      {/* Adjust the top margin to shift the section downwards */}
      <div className="lg:flex mx-auto lg:mx-auto">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="block lg:hidden w-[352px] lg:w-[614px]">
            {/* Adjust the width as needed */}
            <div className="relative w-[355px] lg:w-full h-[331px] mb-3 lg:h-[572px] rounded-3xl overflow-hidden">
              <Image
                src={section2img}
                alt="Section 2"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="mb-[20px]">
            {/* Add margin-bottom to create space */}
            <h1
              className="text-[32px] lg:text-[64px] max-w-[372] lg:max-w-[642px] text-start font-bold mb-4"
              id="section2head"
              style={{ lineHeight: "109%" }}
            >
              Specialized Support for Women and Children in Crisis
            </h1>
            <p
              className="lg:text-[22px] leading-normal mb-4 text-[14px] max-w-[372px] lg:max-w-[642px]"
              id="section2p"
            >
              Nearly 40% of homeless single mothers in the US suffer from
              depression, and 75% of homeless women with children have
              experienced domestic violence (samhsa.gov, 2023). Violence,
              starvation, women’s health and wellness, and children’s mental and
              physical health are all important issues that affect the future of
              this special population. Our team consists of a board-certified
              child psychiatrist, a female case manager, and a female recovery
              coach who will have direct access in the oversight of specialized
              women and children’s needs.
            </p>
          </div>

          <div className="lg:w-[195px] lg:h-[74px] w-[121px] h-[45px] rounded-full bg-green-500 flex items-center justify-center mb-22">
            {" "}
            {/* Add margin-bottom to create space */}
            <p className="text-[14px] lg:text-2xl">Apply Now</p>
          </div>
        </div>
        <div className="lg:flex hidden w-[614px]">
          {/* Adjust the width as needed */}
          <div className="relative w-full h-[572px] rounded-3xl overflow-hidden">
            <Image
              src={section2img}
              alt="Section 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="block lg:flex mx-auto mt-[140px]">
        <div className="block w-[352px] lg:w-[614px]">
          {/* Adjust the width as needed */}
          <div className="relative w-[355px] lg:w-full h-[331px] mb-3 lg:h-[572px] rounded-3xl overflow-hidden">
            <Image
              src={transitionalhousing}
              alt="happy family"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center lg:ml-[45px]">
          <div className="mb-[20px]">
            {" "}
            {/* Add margin-bottom to create space */}
            <h1
              className="text-[32px] lg:text-[64px] max-w-[362px] lg:max-w-[642px] text-start font-bold mb-4"
              id="section2head"
              style={{ lineHeight: "109%" }}
            >
              Transitional Housing for Women and Children
            </h1>
            <p className="text-[14px] mx-auto lg:text-[22px] leading-normal mb-4 max-w-[352px] lg:max-w-[635px]">
              In 2024 MMR will be opening a women and children’s transitional
              housing facility where women in recovery can receive a chance to
              raise their children in a home of safety, serenity and sobriety.
            </p>
          </div>
          <div className="lg:w-[195px] lg:h-[74px] w-[121px] h-[45px] rounded-full bg-green-500 flex items-center justify-center mb-22">
            {" "}
            {/* Add margin-bottom to create space */}
            <p className="text-[14px] lg:text-2xl">Apply Now</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Section2;
