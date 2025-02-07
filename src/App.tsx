import { useEffect, useState } from "react";
import "./App.css";
import ServiceLevel from "./ServiceLevel";
import Actual from "./Actual";

// 1) Верстка блока "Сводка"
// (шапку, левый сайтбар и подвал - не верстать - вставить картинкой).

// 2) Имитировать запрос к беку (размоканные данные замапить) для блоков "Доходы от заказов" и "Объявления".

// 3) Компонент для "Уровень сервиса" и "активность продвижения".
// Бегунок меняется в зависимости от заданного значения.

// const randomData = {
//   total: 56000,
//   lastYear: 48000,
//   lastMonth: 8600,
//   lastWeek: 2000,
// };

function App() {
  const [incomeData, setIncomeData] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Имитация запроса к беку
    setTimeout(() => {
      setIncomeData({
        total: 56000,
        lastYear: 48000,
        lastMonth: 8600,
        lastWeek: 2000,
      });
    }, 2000);
  }, []);

  // Загрузку данных можно сделать условным рендерингом, пока не пришли значения - вставить нужный скелетон
  if (!incomeData) {
    return (
      <p className="text-center text-[30px] mt-[200px]">
        Имитация запроса на сервер, Загрузка данных... лоадер, скелетон
      </p>
    );
  }

  return (
    <div className="w-[1600px] m-auto flex flex-col gap-[40px] bg-[#F6F5FA]">
      <header className="h-full, w-[1600px] bg-white">
        <img
          className="w-full h-full bg-white"
          src="../public/header.png"
        ></img>
      </header>

      <div className="w-[1200px] ml-auto mr-auto flex gap-[24px]">
        <aside>
          <img src="../public/sidebar.png" alt="aside-block" />
        </aside>

        <section>
          <h1 className="font-semibold text-[32px] mb-[24px]">Сводка</h1>

          <div className=" w-[876px] h-[1000px] rounded-[8px]">
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
                  <img className="inline" src="../public/ArrowUp.png"></img>
                  <span className="text-[12px] text-[#74B200]">5.5 %</span>
                </div>
                <div className="bg-[#F6F5FA] w-[197px] h-[87px] rounded-[8px] border-[#F6F5FA] hover:border-[#DCDDE5] border-[1px] p-[16px] cursor-pointer">
                  <p className="text-[13px] text-[#2A2C36]">Контакты</p>
                  <span className="text-[24px] font-semibold mr-[8px]">0</span>
                  <img className="inline" src="../public/ArrowDown.png"></img>
                  <span className="text-[12px] text-[#F33939]">100 %</span>
                </div>
                <div className="bg-[#F6F5FA] w-[197px] h-[87px] rounded-[8px] border-[#F6F5FA] hover:border-[#DCDDE5] border-[1px] p-[16px] cursor-pointer">
                  <p className="text-[13px] text-[#2A2C36]">Избранное</p>
                  <span className="text-[24px] font-semibold mr-[8px]">8</span>
                </div>
                <div className="bg-[#F6F5FA] w-[197px] h-[87px] rounded-[8px] border-[#F6F5FA] hover:border-[#DCDDE5] border-[1px] p-[16px] cursor-pointer">
                  <p className="text-[13px] text-[#2A2C36]">Заказано товаров</p>
                  <span className="text-[24px] font-semibold mr-[8px]">0</span>
                  <img className="inline" src="../public/ArrowDown.png"></img>
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

            <div className="flex gap-[16px] mt-[16px]">
              <div className="w-[430px] rounded-[8px] bg-white p-[32px]">
                <h2 className="text-[24px] text-[#2A2C36] mb-[24px]">
                  Доходы от заказов
                </h2>

                <div className="flex flex-col">
                  <div className="flex justify-between border-b border-[#ECEBF0] pb-[14px]">
                    <p className="">Всего</p>
                    <span>{incomeData.total} ₽</span>
                  </div>
                  <div className="flex justify-between border-b border-[#ECEBF0] pb-[14px] pt-[14px]">
                    <span>За последний год</span>
                    <span>{incomeData.lastYear} ₽</span>
                  </div>
                  <div className="flex justify-between border-b border-[#ECEBF0] pb-[14px] pt-[14px]">
                    <span>За последний месяц</span>
                    <span>{incomeData.lastMonth} ₽</span>
                  </div>
                  <div className="flex justify-between pt-[14px]">
                    <span>За последнию неделю</span>
                    <span>{incomeData.lastWeek} ₽</span>
                  </div>
                </div>
              </div>

              <div className="w-[430px] rounded-[8px] bg-white p-[32px]">
                <h2 className="text-[24px] text-[#2A2C36] mb-[24px]">
                  Обьявления
                </h2>

                <ul className="flex flex-col">
                  <li className="pb-[14px] border-b border-[#ECEBF0] flex justify-between items-center relative pl-6 before:content-[''] before:w-3 before:h-3 before:bg-[#8FBA3E] before:rounded-full before:absolute before:left-0">
                    <span>Активные</span>
                    <span className="flex items-center gap-4">
                      14
                      <img
                        src="../public/CaretRight.png"
                        className="w-4 h-4"
                        alt="Иконка"
                      />
                    </span>
                  </li>

                  <li className="pb-[14px] pt-[14px] border-b border-[#ECEBF0] flex justify-between items-center relative pl-6 before:content-[''] before:w-3 before:h-3 before:bg-[#FF6347] before:rounded-full before:absolute before:left-0">
                    <span>Неактивные</span>
                    <span className="flex items-center gap-4">
                      2
                      <img
                        src="../public/CaretRight.png"
                        className="w-4 h-4"
                        alt="Иконка"
                      />
                    </span>
                  </li>

                  <li className="pb-[14px] pt-[14px] border-b border-[#ECEBF0] flex justify-between items-center relative pl-6 before:content-[''] before:w-3 before:h-3 before:bg-[#FFA500] before:rounded-full before:absolute before:left-0">
                    <span>Черновики</span>
                    <span className="flex items-center gap-4">
                      3
                      <img
                        src="../public/CaretRight.png"
                        className="w-4 h-4"
                        alt="Иконка"
                      />
                    </span>
                  </li>

                  <li className="pt-[14px] flex justify-between items-center relative pl-6 before:content-[''] before:w-3 before:h-3 before:bg-[#D3D3D3] before:rounded-full before:absolute before:left-0">
                    <span>Проданные</span>
                    <span className="flex items-center gap-4">
                      0
                      <img
                        src="../public/CaretRight.png"
                        className="w-4 h-4"
                        alt="Иконка"
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-[16px]">
              <ServiceLevel />
              <Actual />
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-[80px]">
        <img src="../public/footer.png"></img>
      </footer>
    </div>
  );
}

export default App;
