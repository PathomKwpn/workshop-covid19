import { useAppDispatch } from "../redux/hooks";
import {
  newCases,
  totalCases,
  totalScreeningAirlines,
  totalScreeningAirlinePassengers,
  totalScreeningShips,
} from "../redux/tableSlice";
const Button = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full max-w-[800px] flex justify-center flex-wrap gap-3">
      <button
        className="bg-[#2D3250] hover:bg-[#3c4369] text-white font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow-md"
        onClick={() => {
          dispatch(totalCases());
        }}
      >
        ผู้ป่วยยืนยัน (สะสม)
      </button>
      <button
        className="bg-[#2D3250] hover:bg-[#3c4369] text-white font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow-md"
        onClick={() => {
          dispatch(newCases());
        }}
      >
        จำนวนผู้ป่วยยืนยัน (ต่อวัน)
      </button>
      <button
        className="bg-[#2D3250] hover:bg-[#3c4369] text-white font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow-md"
        onClick={() => {
          dispatch(totalScreeningAirlines());
        }}
      >
        จำนวนเที่ยวบิน (สะสม)
      </button>
      <button
        className="bg-[#2D3250] hover:bg-[#3c4369] text-white font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow-md"
        onClick={() => {
          dispatch(totalScreeningAirlinePassengers());
        }}
      >
        จำนวนผู้เดินทางคัดกรอง (สะสม)
      </button>
      <button
        className="bg-[#2D3250] hover:bg-[#3c4369] text-white font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow-md"
        onClick={() => {
          dispatch(totalScreeningShips());
        }}
      >
        จำนวนคัดกรองทางเรือ (สะสม)
      </button>
    </div>
  );
};

export default Button;
