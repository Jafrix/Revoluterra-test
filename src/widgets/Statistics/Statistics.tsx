import arrowUp from "../../assets/ArrowUp.png"
import arrowDown from "../../assets/ArrowDown.png"

function Statistics() {
  return (
    <div className="bg-white p-[32px] rounded-[8px]">
    <div className="flex justify-between">
      <h2 className="text-[24px] text-[#2A2C36] font-semibold">
        Статистика за 21 - 27 дек
      </h2>
      <button className="text-[13px] font-semibold pl-[24px] pr-[24px] pt-[11px] pb-[11px] border-[1px] border-[#898B94] rounded-[8px] hover:cursor-pointer">
        Больше статистики
      </button>
    </div>

    <div className="flex gap-[8px] mt-[24px]">
      <div className="w-[197px] h-[87px] rounded-[8px] border-[1px] border-[#74B200] p-[16px] cursor-pointer">
        <p className="text-[13px] text-[#2A2C36]">Просмотры</p>
        <span className="text-[24px] font-semibold mr-[8px]">
          174
        </span>
        <img className="inline" src={arrowUp}></img>
        <span className="text-[12px] text-[#74B200]">5.5 %</span>
      </div>
      <div className="bg-[#F6F5FA] w-[197px] h-[87px] rounded-[8px] border-[#F6F5FA] hover:border-[#DCDDE5] border-[1px] p-[16px] cursor-pointer">
        <p className="text-[13px] text-[#2A2C36]">Контакты</p>
        <span className="text-[24px] font-semibold mr-[8px]">0</span>
        <img className="inline" src={arrowDown}></img>
        <span className="text-[12px] text-[#F33939]">100 %</span>
      </div>
      <div className="bg-[#F6F5FA] w-[197px] h-[87px] rounded-[8px] border-[#F6F5FA] hover:border-[#DCDDE5] border-[1px] p-[16px] cursor-pointer">
        <p className="text-[13px] text-[#2A2C36]">Избранное</p>
        <span className="text-[24px] font-semibold mr-[8px]">8</span>
      </div>
      <div className="bg-[#F6F5FA] w-[197px] h-[87px] rounded-[8px] border-[#F6F5FA] hover:border-[#DCDDE5] border-[1px] p-[16px] cursor-pointer">
        <p className="text-[13px] text-[#2A2C36]">Заказано товаров</p>
        <span className="text-[24px] font-semibold mr-[8px]">0</span>
        <img className="inline" src={arrowDown}></img>
        <span className="text-[12px] text-[#F33939]">100 %</span>
      </div>
    </div>

    <div className="mt-[24px] flex gap-[24px]">
      <div className="flex flex-col items-center">
        <div className="w-[95px] h-[240px] bg-[#F6F5FA] rounded-[8px] flex flex-col-reverse">
          <div className="bg-[#8FBA3E] h-[45%] rounded-[8px] hover:cursor-pointer"></div>
        </div>
        <p className="mt-2 text-center text-sm">21, сб</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-[95px] h-[240px] bg-[#F6F5FA] rounded-[8px] flex flex-col-reverse">
          <div className="bg-[#8FBA3E] h-[50%] rounded-[8px] hover:cursor-pointer"></div>
        </div>
        <p className="mt-2 text-center text-sm">22, вс</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-[95px] h-[240px] bg-[#F6F5FA] rounded-[8px] flex flex-col-reverse">
          <div className="bg-[#8FBA3E] h-[60%] rounded-[8px] hover:cursor-pointer"></div>
        </div>
        <p className="mt-2 text-center text-sm">23, пн</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-[95px] h-[240px] bg-[#F6F5FA] rounded-[8px] flex flex-col-reverse">
          <div className="bg-[#8FBA3E] h-[35%] rounded-[8px] hover:cursor-pointer"></div>
        </div>
        <p className="mt-2 text-center text-sm">24, вт</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-[95px] h-[240px] bg-[#F6F5FA] rounded-[8px] flex flex-col-reverse"></div>
        <p className="mt-2 text-center text-sm">25, ср</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-[95px] h-[240px] bg-[#F6F5FA] rounded-[8px] flex flex-col-reverse">
          <div className="bg-[#8FBA3E] h-[100%] rounded-[8px] hover:cursor-pointer"></div>
        </div>
        <p className="mt-2 text-center text-sm">26, чт</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-[95px] h-[240px] bg-[#F6F5FA] rounded-[8px] flex flex-col-reverse"></div>
        <p className="mt-2 text-center text-sm">27, пт</p>
      </div>
    </div>
  </div>
  )
}

export default Statistics