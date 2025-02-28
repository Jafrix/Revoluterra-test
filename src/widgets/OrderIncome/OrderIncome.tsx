import { useEffect, useState } from "react";
import Skeleton from "../../shared/Skeleton";

function OrderIncome() {
  const [incomeData, setIncomeData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIncomeData({
        total: 56000,
        lastYear: 48000,
        lastMonth: 8600,
        lastWeek: 2000,
      });
    }, 2000);
  }, []);

  return (
    <div className="w-[430px] rounded-[8px] bg-white p-[32px]">
      <h2 className="text-[24px] text-[#2A2C36] mb-[24px]">
        Доходы от заказов
      </h2>

      <div className="flex flex-col">
        <div className="flex justify-between border-b border-[#ECEBF0] pb-[14px]">
          <p>Всего</p>
          <span>{incomeData ? `${incomeData.total} ₽` : <Skeleton />}</span>
        </div>
        <div className="flex justify-between border-b border-[#ECEBF0] pb-[14px] pt-[14px]">
          <span>За последний год</span>
          <span>{incomeData ? `${incomeData.lastYear} ₽` : <Skeleton />}</span>
        </div>
        <div className="flex justify-between border-b border-[#ECEBF0] pb-[14px] pt-[14px]">
          <span>За последний месяц</span>
          <span>{incomeData ? `${incomeData.lastMonth} ₽` : <Skeleton />}</span>
        </div>
        <div className="flex justify-between pt-[14px]">
          <span>За последнюю неделю</span>
          <span>{incomeData ? `${incomeData.lastWeek} ₽` : <Skeleton />}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderIncome;
