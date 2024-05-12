import { heart } from '@/public/assets'
import Image from 'next/image'
import React from 'react'


const Hero = () => {
  return (
    <main className='relative items-center h-full w-full mt-[112px] lg:ml-[180px] lg:max-w-[1000px] lg:mt-[100px] pl-[32px]'>
        <h1 id='Herotitle' className="lg:text-[96px] leading-[115%] w-full lg:max-w-[864px] text-[48px]">
        Empowering <br /> <span className='text-[#00CC57] lg:max-w-[864px] w-fit'>Women & Children</span>
        </h1>
        <p className='max-w-[363px] lg:max-w-[773px]  text-[14px] lg:text-[24px] mb-[20px]'>Single mothers are not a forgotten breed at MMR. With combined efforts, you can help us lead women and children to eventually live a self-reliant lifestyle.</p>
        <div className="flex items-center bg-[#00CC57] p-[14px] lg:p-[24px] rounded-full w-[142px] lg:w-[234px] h-[39px] lg:h-[74px]">
        <Image className="mr-2 w-[14px] h-[12px] lg:w-[28px] lg:h-[24px]"src={heart} alt="" width={28} height={24} />
        <p className='lg:text-[24px] text-[14px] '>Get Help Now</p>
        </div>
    </main>
  )
}

export default Hero