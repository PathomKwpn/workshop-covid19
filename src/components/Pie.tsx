import ReactECharts from "echarts-for-react";
import { useAppSelector } from "../redux/hooks";
import { useState } from "react";

interface PieDataType {
  value: number | null;
  name: string | null;
}
const Pie = () => {
  const total: any = [];
  const dates: any = [];
  const selectDateData: Array<PieDataType> = [];

  const [selectDate, setSelectDate] = useState<string>("29-07-2020");
  const { data } = useAppSelector((state) => state.data);

  if (data != null) {
    data.map((item) => {
      total.push(item.totalCases);
      dates.push(item.publishdate);
    });
  }

  //Push PieData
  if (data != null) {
    data.map((item) => {
      if (item.publishdate == selectDate) {
        selectDateData.push({
          value: item.totalPrivateHospital,
          name: "totalPrivateHospital",
        });
        selectDateData.push({
          value: item.totalPublicHospital,
          name: "totalPublicHospital",
        });
        selectDateData.push({
          value: item.totalOtherPUI,
          name: "totalOtherPUI",
        });
      }
    });
  }

  const onChange = (event: any) => {
    const value = event.target.value;

    setSelectDate(value);
  };

  const option = {
    title: {
      left: "center",
      text: "totalHospitalPUI" + " Pie",
      subtext: selectDate,
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
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "20%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 10,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: selectDateData,
        top: "25%",
      },
    ],
  };
  return (
    <div className="w-[90%] max-w-[800px] mt-[48px] bg-white p-[24px] rounded-lg shadow-md">
      <div className="w-full flex flex-end justify-end items-center">
        <label htmlFor="date" className="font-bold">
          Date :
        </label>
        <select
          onChange={onChange}
          name="select-day"
          id="select-day"
          defaultValue={"29-07-2020"}
          className="max-w-[150px] bg-[#545b83] border border-gray-300 text-white font-bold text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 cursor-pointer "
        >
          {dates.map((item: string) => {
            return (
              <option className="text-center font-bold" value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <ReactECharts
        className="bg-white w-[100%] h-[400px] max-w-[800px] rounded-lg my-[24px]"
        option={option}
      />
    </div>
  );
};

export default Pie;
