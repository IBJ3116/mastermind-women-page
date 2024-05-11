import React from "react";
import Image from "next/image";
import { happymotherandchild } from "@/public/assets";

const Section3 = () => {
  return (
    <main className="mt-[120px]">
      <div className="text-center gap-11">
        <div>
          <h1 className="text-[20px] lg:text-[48px] my-120px  font-semibold mb-[20px]">
            Testimonials
          </h1>
        </div>

        <div className="mx-auto max-w-[1024px]">
          <div>
            <h1
              id="secondheading"
              className="text-[32px] lg:text-[64px] mb-[20px] font-semibold"
            >
              <span id="name" className="">
                I’m Debra,
              </span>{" "}
              34 years old, Mother of Two
            </h1>
          </div>

          <div>
            <p className="text-[14px] max-w-[352px] mx-auto lg:text-[24px] mb-[30px] lg:mb-[120px] lg:max-w-[1024px]">
              “I was in a severe depressive state before I received help from
              Mastermind recovery and out of work for over a year. With their
              help my depression has not been as bad. My mental health has been
              a lot better than what it was and moving to San Antonio and
              getting help from Mastermind was the best decisions for us!”
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-[352px] lg:max-w-[1300px]">
          <div className="rounded-xl  overflow-hidden lg:h-[418px] lg:object-contain ">
            <Image
              src={happymotherandchild}
              alt="happy mother and child"
              className="rounded-xl lg:object-cover inset-full "
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Section3;
