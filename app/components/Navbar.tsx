import { heart, mastermind } from "@/public/assets";
import Image from "next/image";
import menu from "../constants"; // Ensure your menu items have 'href' properties defined
import Link from "next/link";
import { menuImg } from "@/public/assets";

const Navbar = () => {
  return (
    <nav className="fixed z-10 w-full top-0">
      <div className="flex justify-between items-center py-4 px-4 lg:px-8 bg-black/60 backdrop-blur-sm h-[80px]">
        <div className="flex-shrink-0 mr-4 lg:mr-0">
          <Image
            className="w-[127.1px] h-[27.6px] lg:w-[235px] lg:h-[51px]"
            src={mastermind}
            alt="Mastermind Logo"
            width={235}
            height={51}
          />
        </div>
        <div className="hidden lg:flex flex-grow justify-center space-x-8">
          {menu.map((i) => (
            <Link href={i.href || "#"} key={i.id} className="text-lg whitespace-nowrap">
              <h1>{i.title}</h1>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center bg-[#00CC57] px-4 lg:px-6 py-2 lg:py-3 rounded-full ml-auto">
          <Image className="mr-2" src={heart} alt="Heart Icon" width={24} height={20} />
          <p className="text-base lg:text-lg whitespace-nowrap">Partner with us</p>
        </div>
        <div className="flex lg:hidden">
          <Image src={menuImg} alt="Menu Icon" className="flex lg:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
