import SliderRange10 from "./Slider-range-10";
import { useState } from "react";

function Actual() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="border-red-600 border-[1px] relative w-[430px] flex flex-col p-[32px] bg-white mt-[16px] rounded-[8px]">
      <div
        className="absolute top-[16px] right-[15px] flex items-center"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <img
          className="w-[24px] hover:cursor-pointer"
          src="../public/Question.png"
          alt="Информация"
        />

        {showTooltip && (
          <div className="absolute top-[-40px] right-0 bg-black text-white text-xs p-2 rounded-lg shadow-md w-max">
            Узнать подробнее
          </div>
        )}
      </div>

      <div className="text-[24px]">Активность продвижения</div>
      <div className="flex gap-[8px]">
        <SliderRange10 />
      </div>
      <p className="text-[14px] mt-[16px] mb-[8px]">Продвиньте объявления</p>
      <p className="text-[13px] text-[#636570]">Конкуренты активнее, чем вы</p>
    </div>
  );
}

export default Actual;
