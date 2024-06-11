"use client";

import { heart } from '@/public/assets';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { Bricolage_Grotesque } from 'next/font/google';
import { gsap } from 'gsap';

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: '600', // Ensuring bold weight is loaded
});

const Hero: React.FC = () => {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroTextRef = useRef<HTMLParagraphElement>(null);
  const heroButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroTitleRef.current && heroTextRef.current && heroButtonRef.current) {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });
      tl.fromTo(heroTitleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
        .fromTo(heroTextRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, '-=0.5')
        .fromTo(heroButtonRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, '-=0.5');
    }
  }, []);

  return (
    <main className='relative items-center h-full mt-[112px] ml-[50px] lg:ml-[130px] lg:max-w-[900px] lg:mt-[130px]'>
      <h1
        ref={heroTitleRef}
        id='Herotitle'
        className={`${bricolage.className} lg:text-[100px] leading-[115%] w-full lg:max-w-[940px] text-[48px] font-bold`}
      >
        Empowering <span className='text-[#00CC57] lg:max-w-[864px] w-fit'>Women & Children</span>
      </h1>
      <p
        ref={heroTextRef}
        className='max-w-[363px] lg:max-w-[773px] text-[14px] lg:text-[24px] mb-[20px]'
      >
        Single mothers are not a forgotten breed at MMR. With combined efforts, you can help us lead women and children to eventually live a self-reliant lifestyle.
      </p>
      <div
        ref={heroButtonRef}
        className="flex items-center bg-[#00CC57] p-[14px] lg:p-[24px] rounded-full w-[142px] lg:w-[234px] h-[39px] lg:h-[74px]"
      >
        <Image
          className="mr-2 w-[14px] h-[12px] lg:w-[28px] lg:h-[24px]"
          src={heart}
          alt="Heart icon"
          width={28}
          height={24}
        />
        <p className='lg:text-[24px] text-[14px]'>Get Help Now</p>
      </div>
    </main>
  );
};

export default Hero;
