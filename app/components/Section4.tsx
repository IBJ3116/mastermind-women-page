import React from "react";
import progressMenu from "../constants/progress";

const ProgressBar = ({ bgcolor, completed }) => {
  const containerStyles = "h-2 w-full items-center bg-[#2B2B36] rounded-full";
  const fillerStyles = `h-full text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full ${bgcolor}`;

  return (
    <div className={containerStyles}>
      <div style={{ width: `${completed}%` }} className={fillerStyles}>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <main className="mx-auto lg:max-w-[1080px] ">
      <div className="text-center mt-[120px] mb-[120px]">
        <h1 className="max-w-[352px] mx-auto text-[32px] lg:text-[64px] font-bold leading-none lg:max-w-[687px]">
          Debra's Improvement
          <br />
          Progress
        </h1>
        <p className="max-w-[352px] mx-auto mt-[20px] text-[14px] lg:text-[24px] lg:max-w-[1024px]">
          Debra has been receiving follow up care from MMR for 6 months now.
          Debras extensive evaluation results done (in 90 day increments) by our
          case managers and overseen by our double board certified psychiatrist
          are below:
        </p>
      </div>

      <div className="flex flex-col w-full">
        {/* Table header */}
        <div className=" p-2 font-bold grid grid-cols-4 justify-evenly lg:gap-[28px] gap-[51px] mb-6 text-[#87888C]">
          <p className="ml-[17px] lg:ml-[100px] text-[12px] lg:text-[22px]">#</p>
          <p className="text-[12px] lg:text-[22px]">Improvements</p>
          <p className="text-[12px] lg:text-[22px]">Progress</p>
          <p className="lg:ml-32 text-[12px] lg:text-[22px]">%</p>
        </div>
        <div>
          {progressMenu.map((item) => {
            return (
              <div
                className=" p-2 font-bold grid grid-cols-4 items-center justify-evenly lg:gap-[28px] gap-[51px] mb-4 "
                key={item.id}
              >
                <p className="ml-[17px] lg:ml-[100px]">{item.id}</p>
                <p className="text-[10px]  mr-[51px]">{item.improvements}</p>
                <ProgressBar bgcolor="bg-green-500" completed={item.progressPercentage}/>
                <p className="lg:ml-32 text-[10px] lg:text-[28px] border border-[#00CC57] w-fit p-[3px] lg:p-3 rounded-[4px] lg:rounded-xl text-[#00CC57]">+{item.progressPercentage}%</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Section4;
