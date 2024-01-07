import ReactECharts from "echarts-for-react";
import { useAppSelector } from "../redux/hooks";
import { useState } from "react";

const Bar = () => {
  const total: any = [];
  const dates: any = [];
  const [selectDay, setSelectDay] = useState(7);
  const { data } = useAppSelector((state) => state.data);
  const { name } = useAppSelector((state) => state.tableName);

  if (data != null && name == "totalCases") {
    data.slice(0, selectDay).map((item) => {
      total.push(item.totalCases);
      dates.push(item.publishdate);
    });
  } else if (data != null && name == "newCases") {
    data.slice(0, selectDay).map((item) => {
      if (item.newCases != null) {
        total.push(item.newCases);
      } else {
        total.push(0);
      }

      dates.push(item.publishdate);
    });
  } else if (data != null && name == "totalScreeningAirlines") {
    data.slice(0, selectDay).map((item) => {
      if (item.totalScreeningAirlines != null) {
        total.push(item.totalScreeningAirlines);
      } else {
        total.push(0);
      }

      dates.push(item.publishdate);
    });
  } else if (data != null && name == "totalScreeningAirlinePassengers") {
    data.slice(0, selectDay).map((item) => {
      if (item.totalScreeningAirlinePassengers != null) {
        total.push(item.totalScreeningAirlinePassengers);
      } else {
        total.push(0);
      }

      dates.push(item.publishdate);
    });
  } else if (data != null && name == "totalScreeningShips") {
    data.slice(0, selectDay).map((item) => {
      if (item.totalScreeningShips != null) {
        console.log(total);

        total.push(item.totalScreeningShips);
      } else {
        total.push(0);
      }

      dates.push(item.publishdate);
    });
  }
  // {
  //   data != null && data.map((item) => total.push(item.totalCases));
  // }
  // {
  //   data != null && data.map((item) => dates.push(item.publishdate));
  // }
  const onChange = (event: any) => {
    const value = event.target.value;
    if (value != "all") {
      setSelectDay(value);
    } else if (data != undefined) {
      setSelectDay(data?.length);
    }
  };

  const option = {
    title: {
      left: "center",
      text: name + " Bar",
      subtext: "( " + dates[0] + " - " + dates[dates.length - 1] + " )",
      textStyle: {
        fontSize: 20,
        fontFamily: "monospace",
      },
      subtextStyle: {
        fontSize: 10,
      },
      padding: 5,
      top: "2%",
    },
    xAxis: {
      type: "category",
      data: dates,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: total,
        type: "bar",
        itemStyle: {
          color: "rgb(255, 191, 114)",
        },
      },
    ],
  };

  return (
    <div className="w-[90%] max-w-[800px] mt-[48px] bg-white p-[24px] rounded-lg shadow-md">
      <div className="w-full flex flex-end justify-end">
        <select
          onChange={onChange}
          name="select-day"
          id="select-day"
          className="max-w-[100px] bg-[#545b83] border border-gray-300 text-white font-bold text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 cursor-pointer"
        >
          <option className="text-center font-bold" value="7">
            7day
          </option>
          <option className="text-center font-bold" value="20">
            20day
          </option>
          <option className="text-center font-bold" value="30">
            30day
          </option>
          <option className="text-center font-bold" value="60">
            60day
          </option>
          <option className="text-center font-bold" value="120">
            120day
          </option>
          <option className="text-center font-bold" value="all">
            Show all
          </option>
        </select>
      </div>
      <ReactECharts
        className="bg-white w-[100%] max-w-[800px] rounded-lg my-[24px]"
        option={option}
      />
    </div>
  );
};

export default Bar;
