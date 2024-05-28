import Image from "next/image";
import { heart } from "@/public/assets";
import sponsortable from "../constants/sponsor";

const Sponsor = () => {
  return (
    <main className="mx-auto w-full mt-[80px]">
      <div className="text-center">
        <h1 className="mx-auto text-[32px] lg:text-[64px] font-bold leading-none lg:max-w-[1028px]">
          Be A Sponsor
        </h1>
        <p className="max-w-[352px] lg:max-w-[1181px] mx-auto text-[14px] lg:text-[24px] mt-[20px]">
          Help a woman and her baby live an easier life of recovery
        </p>

        <div className="lg:w-[210px] lg:h-[74px] w-[121px] h-[45px] rounded-full bg-green-500 flex items-center justify-center mb-22 mx-auto mt-[28px]">
          <Image
            className="mr-2 w-[14px] h-[12px] lg:w-[28px] lg:h-[24px]"
            src={heart}
            alt="heart"
            width={28}
            height={24}
          />
          <p className="lg:text-[24px] text-[14px]">Donate Now</p>
        </div>

        <div className="flex flex-col w-full mx-auto mt-[120px]">
          {/* Table header */}
          <div className="p-2 font-bold grid grid-cols-3 lg:gap-[28px] gap-[51px] mb-[50px] text-[#87888C] items-center">
            <p className="text-left text-[16px] lg:text-[24px] lg:ml-[200px] ml-[30px]">
              #
            </p>
            <p className="text-left text-[16px] lg:text-[24px] lg:ml-[50px] ml-[30px]">
              Items
            </p>
            <p className="text-left text-[16px] lg:text-[24px] lg:ml-[50px] ml-[30px]">
              Cost
            </p>
          </div>

          <div className="mx-auto">
            {sponsortable.map((item) => (
              <div
                className="p-[20px] font-bold grid grid-cols-3 items-center justify-center lg:gap-[28px] gap-[51px] mb-4"
                key={item.id}
              >
                <p className="text-left ml-[17px] lg:ml-[100px] text-[14px] lg:text-[18px]">
                  {item.id}
                </p>
                <p className="text-left text-[14px] lg:text-[18px]">
                  {item.item}
                </p>
                <p className="text-left ml-[17px] lg:ml-[100px] text-[#00CC57] text-[14px] lg:text-[18px]">
                  {item.cost}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sponsor;
