"use client";

import React, { useRef } from "react";
import { section2img, transitionalhousing } from "@/public/assets";
import Image from "next/image";
import { useGsapAnimations } from "../constants/hooks/useGsapAnimations";

const Section2: React.FC = () => {
  const sectionRef1 = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);

  useGsapAnimations(".section2-element-1");
  useGsapAnimations(".section2-element-2");

  return (
    <main className="relative mt-[120px] mx-auto max-w-[352px] lg:max-w-[1301px] lg:px-4">
      {/* Section 1 */}
      <div
        ref={sectionRef1}
        className="lg:flex mx-auto lg:mx-auto section2-element-1"
      >
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="block lg:hidden w-[352px] lg:w-[614px]">
            {/* Image for mobile view */}
            <div className="relative w-[355px] lg:w-full h-[331px] mb-3 lg:h-[572px] rounded-3xl overflow-hidden">
              <Image
                src={section2img}
                alt="Section 2"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="mb-[20px] lg:mb-[40px]">
            {" "}
            {/* Adjust margin-bottom as needed */}
            <h1
              className="text-[32px] lg:text-[64px] max-w-[372px] lg:max-w-[800px] text-start font-bold mb-4"
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
              this special population. Our growing team currently consists of a
              board-certified child and adolescent psychiatrist, addiction
              psychiatrist, therapists, case managers, licensed chemical
              dependency counselors, recovery coaches, pastors, and other
              compassionate individuals who want to offer all the help there is
              for women and their children.
            </p>
          </div>

          <div className="lg:w-[195px] lg:h-[74px] w-[121px] h-[45px] rounded-full bg-green-500 flex items-center justify-center mb-22">
            <p className="text-[14px] lg:text-2xl">Apply Now</p>
          </div>
        </div>
        <div className="lg:flex hidden w-[614px]">
          {/* Image for desktop view */}
          <div className="relative w-full h-[572px] rounded-3xl overflow-hidden lg:ml-[20px]">
            {" "}
            {/* Adjust margin-left as needed */}
            <Image
              src={section2img}
              alt="Section 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div
        ref={sectionRef2}
        className="block lg:flex mx-auto mt-[140px] section2-element-2"
      >
        <div className="block w-[352px] lg:w-[614px]">
          {/* Image for mobile and desktop view */}
          <div className="relative w-[355px] lg:w-full h-[331px] mb-3 lg:h-[572px] rounded-3xl overflow-hidden">
            <Image
              src={transitionalhousing}
              alt="happy family"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center lg:ml-[60px] lg:pl-[20px]">
          {" "}
          {/* Adjust margin-left and padding-left as needed */}
          <div className="mb-[20px] lg:mb-[40px]">
            {" "}
            {/* Adjust margin-bottom as needed */}
            <h1
              className="text-[32px] lg:text-[64px] max-w-[362px] lg:max-w-[852px] text-start font-bold mb-4"
              id="section2head"
              style={{ lineHeight: "109%" }}
            >
              Transitional Housing for Women and Children
            </h1>
            <p className="text-[14px] mx-auto lg:text-[22px] leading-normal mb-4 max-w-[352px] lg:max-w-[635px]">
              MMR provides stability for mothers and their babies in
              transitional living houses. These unique houses provide women in
              recovery and chance to raise their children in a safe, serene,
              supervised and family-friendly sober environment”
            </p>
          </div>
          <div className="lg:w-[195px] lg:h-[74px] w-[121px] h-[45px] rounded-full bg-green-500 flex items-center justify-center mb-22">
            <p className="text-[14px] lg:text-2xl">Apply Now</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Section2;
