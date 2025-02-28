import caretRight from "../../assets/CaretRight.png";

function Notices() {
  return (
    <div className="w-[430px] rounded-[8px] bg-white p-[32px]">
      <h2 className="text-[24px] text-[#2A2C36] mb-[24px]">Обьявления</h2>

      <ul className="flex flex-col">
        <li className="pb-[14px] border-b border-[#ECEBF0] flex justify-between items-center relative pl-6 before:content-[''] before:w-3 before:h-3 before:bg-[#8FBA3E] before:rounded-full before:absolute before:left-0">
          <span>Активные</span>
          <span className="flex items-center gap-4">
            14
            <img src={caretRight} className="w-4 h-4" alt="Иконка" />
          </span>
        </li>

        <li className="pb-[14px] pt-[14px] border-b border-[#ECEBF0] flex justify-between items-center relative pl-6 before:content-[''] before:w-3 before:h-3 before:bg-[#FF6347] before:rounded-full before:absolute before:left-0">
          <span>Неактивные</span>
          <span className="flex items-center gap-4">
            2
            <img src={caretRight} className="w-4 h-4" alt="Иконка" />
          </span>
        </li>

        <li className="pb-[14px] pt-[14px] border-b border-[#ECEBF0] flex justify-between items-center relative pl-6 before:content-[''] before:w-3 before:h-3 before:bg-[#FFA500] before:rounded-full before:absolute before:left-0">
          <span>Черновики</span>
          <span className="flex items-center gap-4">
            3
            <img src={caretRight} className="w-4 h-4" alt="Иконка" />
          </span>
        </li>

        <li className="pt-[14px] flex justify-between items-center relative pl-6 before:content-[''] before:w-3 before:h-3 before:bg-[#D3D3D3] before:rounded-full before:absolute before:left-0">
          <span>Проданные</span>
          <span className="flex items-center gap-4">
            0
            <img src={caretRight} className="w-4 h-4" alt="Иконка" />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Notices;
