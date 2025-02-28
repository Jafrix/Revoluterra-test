import Actual from "../Actual/Actual";
import ServiceLevel from "../Servicelevel/ServiceLevel";
import Aside from "../aside/Aside";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Notices from "../Notices/Notices";
import OrderIncome from "../OrderIncome/OrderIncome";
import Statistics from "../Statistics/Statistics";

function SummaryItem() {
  return (
    <>
      <Header />
      <div className="w-[1200px] ml-auto mr-auto flex gap-[24px]">
        <Aside />
        <section>
          <h1 className="font-semibold text-[32px] mb-[24px]">Сводка</h1>
          <div className=" w-[876px] h-[1000px] rounded-[8px]">
            <Statistics />
            <div className="flex gap-[16px] mt-[16px]">
              <OrderIncome />
              <Notices />
            </div>
            <div className="flex gap-[16px]">
              <ServiceLevel />
              <Actual />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default SummaryItem;
