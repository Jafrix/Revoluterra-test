import Slider from "./Slider-range-100";
import { useState } from "react";

function ServiceLevel() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  const getActivityText = () => {
    if (sliderValue < 30) return "У вас слабый уровень";
    if (sliderValue < 70) return "У вас средний уровень";
    return "У вас высокий уровень";
  };

  return (
    <div className="relative w-[430px] flex flex-col p-[32px] bg-white mt-[16px] rounded-[8px]">
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

      <div className="text-[24px]">Уровень сервиса</div>
      <div className="flex gap-[8px]">
        <Slider onChange={setSliderValue} />
      </div>
      <p className="text-[14px] mt-[16px] mb-[8px]">{getActivityText()}</p>
      <p className="text-[13px] text-[#636570]">
        Спасибо, что следуете правилам, — за это положены преимущества
      </p>
    </div>
  );

  //   (
  //     <div className="relative w-[430px] flex flex-col p-[32px] bg-white mt-[16px] rounded-[8px]">
  //       <img className="absolute top-[16px] right-[15px] w-[24px] hover:cursor-pointer" src="../public/Question.png"></img>
  //       <div className=" text-[24px]">Уровень сервиса</div>
  //       <div className="flex gap-[8px]">
  //         <Slider />
  //       </div>
  //       <p className="text-[14px] mt-[16px] mb-[8px]">У вас высокий уровень</p>
  //       <p className="text-[13px] text-[#636570]">
  //         Спасибо, что следуете правилам, — за это положены преимущества
  //       </p>
  //     </div>
  //   );
}

export default ServiceLevel;
