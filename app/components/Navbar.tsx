import { heart, mastermind } from "@/public/assets";
import Image from "next/image";
import menu from "../constants";
import Link from "next/link";
import { menuImg } from "@/public/assets";

const Navbar = () => {
  return (
    <nav className="relative z-10 w-full top-0 h-[74]">
      <div className="flex justify-around z-10 py-[23px] items-center">
        <div className="mr-[180px]">
          <Image className="w-[127.1px] h-[27.6px] lg:w-[235px] lg:h-[51px]" src={mastermind} alt="" width={235} height={51} />
        </div>
        <div className="hidden lg:flex ">
          {menu.map((i) => (
            <Link className="pr-[50px] text-[22px]" href="" key={i.id}>
              <h1>{i.title}</h1>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center bg-[#00CC57] p-[24px] rounded-full">
          <Image className="mr-2" src={heart} alt="" width={28} height={24} />
          <p className="text-[24px]">Partner with us</p>
        </div>
        <div className="flex lg:hidden">
          <Image src={menuImg} alt="menu image for navigation" className="flex lg:hidden"/>
        </div>
        <div className="absolute top-0 bg-black w-full -z-10 lg:h-[120px] h-[85px] opacity-75 "></div>
      </div>
      
    </nav>
  );
};

export default Navbar;
