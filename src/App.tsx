import "./App.css";

import { useEffect } from "react";

//Redux
import { getDatas } from "./redux/datasSlice.tsx";
import { useAppDispatch } from "./redux/hooks.tsx";

//Component
import Header from "./components/Header.tsx";
import Line from "./components/Line.tsx";
import Bar from "./components/Bar.tsx";
import Pie from "./components/Pie.tsx";
import Button from "./components/Button.tsx";
function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDatas());
  }, []);

  return (
    <div className="bg-amber-50 min-h-[100vh] w-[100%] py-[32px] flex flex-col justify-center items-center">
      <Header />
      <Button />
      <section className="w-full flex flex-col items-center justify-center mt-[60px]">
        <header className="w-full flex flex-col items-center justify-center">
          <span className="w-[50px] h-[50px] flex justify-center items-center p-[16px] text-white font-bold rounded-[50%] bg-orange-400 shadow-sm">
            1
          </span>
          <div className="text-[black] text-[24px] font-bold mt-[12px]">
            Line Chart
          </div>
        </header>
        <Line />
      </section>

      <section className="w-full flex flex-col items-center justify-center mt-[60px]">
        <header className="w-full flex flex-col items-center justify-center">
          <span className="w-[50px] h-[50px] flex justify-center items-center p-[16px] text-white font-bold rounded-[50%] bg-orange-400 shadow-sm">
            2
          </span>
          <div className="text-[black] text-[24px] font-bold mt-[12px]">
            Bar Chart
          </div>
        </header>
        <Bar />
      </section>

      <section className="w-full flex flex-col items-center justify-center mt-[60px]">
        <header className="w-full flex flex-col items-center justify-center">
          <span className="w-[50px] h-[50px] flex justify-center items-center p-[16px] text-white font-bold rounded-[50%] bg-orange-400 shadow-sm">
            3
          </span>
          <div className="text-[black] text-[24px] font-bold mt-[12px]">
            Pie Chart
          </div>
        </header>
        <Pie />
      </section>
    </div>
  );
}

export default App;
