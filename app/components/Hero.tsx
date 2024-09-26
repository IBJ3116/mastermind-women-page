"use client";

import { heart } from '@/public/assets';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { Bricolage_Grotesque } from 'next/font/google';
import { gsap } from 'gsap';

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: '500', // Ensuring bold weight is loaded
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

  useEffect(() => {
    if (heroButtonRef.current) {
      const button = heroButtonRef.current;
      gsap.set(button, { boxShadow: '0 0 0px #00CC57' });

      button.addEventListener('mouseenter', () => {
        gsap.to(button, { boxShadow: '0 0 20px #00CC57', duration: 0.3 });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, { boxShadow: '0 0 0px #00CC57', duration: 0.3 });
      });

      return () => {
        button.removeEventListener('mouseenter', () => {
          gsap.to(button, { boxShadow: '0 0 20px #00CC57', duration: 0.3 });
        });
        button.removeEventListener('mouseleave', () => {
          gsap.to(button, { boxShadow: '0 0 0px #00CC57', duration: 0.3 });
        });
      };
    }
  }, []);

  return (
    <main className='relative flex flex-col justify-center items-center h-[90vh] pt-[50px] lg:pt-[80px] text-center px-4'>
      <h1
        ref={heroTitleRef}
        id='Herotitle'
        className={`${bricolage.className} lg:text-[100px] leading-[115%] lg:w-[1000px] w-[380px] text-[42px] font-bold`}
      >
        Empowering <span className='text-[#00CC57]'>Women & their Children</span>
      </h1>
      <p
        ref={heroTextRef}
        className='max-w-[363px] lg:max-w-[1000px] text-[14px] lg:text-[24px] mb-[20px] mt-[20px]'
      >
        Women and thier children are not a forgotten demographic at MMR. Our efforts are geared towards empowering not just mothers, but also their children. We utilize leaders and mentors with lived experiences who are motivated to do what it takes to build the women and children in our program.
      </p>
      <div
        ref={heroButtonRef}
        className="flex items-center justify-center bg-[#00CC57] p-[14px] lg:p-[24px] rounded-full w-[142px] lg:w-[234px] h-[39px] lg:h-[74px]"
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