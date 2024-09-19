"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { happymotherandchild } from "@/public/assets";
import styled from "styled-components";
import { gsap } from "gsap";

const ItalicText = styled.span`
  font-style: italic;
`;

const Section3 = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'power3.out' },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0 }
    )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        '-=0.5'
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        '-=0.5'
      );
  }, []);

  return (
    <main className="mt-[120px]">
      <div className="text-center gap-11">
        <div>
          <h1 className="text-[20px] lg:text-[48px] my-120px font-semibold mb-[20px]">
            TESTIMONIAL
          </h1>
        </div>

        <div className="mx-auto max-w-[1024px]">
          <div>
            <h1
              id="secondheading"
              className="text-[32px] lg:text-[64px] mb-[20px] font-semibold"
              ref={headingRef}
            >
              <ItalicText id="name">I’m Debra</ItalicText>, Mother
              of Two
            </h1>
          </div>

          <div>
            <p
              className="text-[14px] max-w-[352px] mx-auto lg:text-[24px] mb-[30px] lg:mb-[120px] lg:max-w-[1024px]"
              ref={paragraphRef}
            >
              “I was in a severe depressive state before I received help from
              Mastermind Recovery and out of work for over a year. With their
              help, my depression has not been as bad. My mental health has been
              a lot better than what it was and moving to San Antonio and
              getting help from Mastermind was the best decision for us!”
            </p>
          </div>
        </div>

        <div
          className="relative mx-auto max-w-[352px] lg:max-w-[1300px]"
          ref={imageRef}
        >
          <div className="rounded-xl overflow-hidden lg:h-[418px] lg:object-contain relative">
            <Image
              src={happymotherandchild}
              alt="happy mother and child"
              className="rounded-xl lg:object-cover inset-full filter blur-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-[20px] lg:text-[40px] font-bold">
                INSERT VIDEO HERE
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Section3;