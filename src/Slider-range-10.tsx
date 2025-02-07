import { useState } from "react";

const SliderRange10 = () => {
  const [value, setValue] = useState(5);

  const percent = (value / 10) * 100;

  return (
    <div className="w-full flex flex-col">
      <div className="flex content-center items-baseline gap-[8px]">
        <p className="mt-2 text-[24px] font-semibold text-gray-700">
          {value} / 10
        </p>
        <p className="text-[12px] text-[#898B94]">За 7 дней</p>
      </div>
      <div className="flex gap-[8px] mt-[10px]">
        <input
          type="range"
          min="0"
          max="10"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            background: `linear-gradient(to right, #F33939 0%, #F33939 ${percent}%, #F39039 ${percent}%, #F39039 100%)`,
          }}
          className="
          w-full h-4 rounded-lg appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-7
          [&::-webkit-slider-thumb]:h-7
          [&::-webkit-slider-thumb]:bg-white
          [&::-webkit-slider-thumb]:border-5
          [&::-webkit-slider-thumb]:border-red-500
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:shadow-md
        "
        />
        <input
          type="range"
          min="0"
          max="100"
          className="
    w-[45%] h-4 bg-gray-300 rounded-lg appearance-none cursor-pointer 
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:opacity-0
    [&::-webkit-slider-thumb]:h-7
    [&::-webkit-slider-thumb]:bg-green-500
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:border-2
    [&::-webkit-slider-thumb]:border-white
    [&::-webkit-slider-thumb]:shadow-md
    [&::-moz-range-thumb]:appearance-none
    [&::-moz-range-thumb]:w-6
    [&::-moz-range-thumb]:h-6
    [&::-moz-range-thumb]:bg-green-500
    [&::-moz-range-thumb]:rounded-full
  "
        />
        <input
          type="range"
          min="0"
          max="100"
          className="
    w-[30%] h-4 bg-gray-300 rounded-lg appearance-none cursor-pointer 
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:opacity-0
    [&::-webkit-slider-thumb]:h-7
    [&::-webkit-slider-thumb]:bg-green-500
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:border-2
    [&::-webkit-slider-thumb]:border-white
    [&::-webkit-slider-thumb]:shadow-md
    [&::-moz-range-thumb]:appearance-none
    [&::-moz-range-thumb]:w-6
    [&::-moz-range-thumb]:h-6
    [&::-moz-range-thumb]:bg-green-500
    [&::-moz-range-thumb]:rounded-full
  "
        />
      </div>
    </div>
  );
};

export default SliderRange10;
