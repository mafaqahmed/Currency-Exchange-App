import React, { useEffect, useState } from "react";
import moment from "moment";
import TableView from "../components/TableView";
import GraphView from "../components/GraphView";

const Histroy = () => {
  const [data, setData] = useState(null);
  const [duration, setDuration] = useState(7);
  const [dataView, setDataView] = useState("table");

  useEffect(() => {
    const conversionHistroy = JSON.parse(
      localStorage.getItem("conversionHistory") || '[]'
    );
    const sortedData = [...conversionHistroy].reverse();
    let currentDate = new Date();
    const date2 = moment(currentDate);
    const filteredData = sortedData.filter((item) => {
      const date1 = moment(item.date);
      return moment.duration(date2.diff(date1)).asDays() < duration;
    });
    setData(filteredData);
  }, [duration]);



  return (
    <div className="min-h-screen pt-40 flex flex-col items-center text-white">
      <p className="mb-10 tracking-widest font-bold text-3xl md:text-5xl uppercase text-center">Conversion History</p>
      <div className="flex md:space-x-5 md:space-y-0 md:flex-row flex-col space-y-5">
        <button
          className= "font-semibold py-2 px-5 bg-red-600 focus:bg-red-900 ease-in-out duration-200 rounded"
          onClick={() => setDuration(7)}
        >
          7 Days
        </button>
        <button
          className="text-white font-semibold py-2 px-5 bg-red-600 focus:bg-red-900 ease-in-out duration-200 rounded"
          onClick={() => setDuration(14)}
        >
          14 Days
        </button>
        <button
          className="text-white font-semibold py-2 px-5 bg-red-600 focus:bg-red-900 ease-in-out duration-200 rounded"
          onClick={() => setDuration(21)}
        >
          21 Days
        </button>
      </div>
      <div className="flex space-x-4 mt-3">
        <div className="flex space-x-2 items-center">
          <input
            type="radio"
            value="table"
            checked={dataView === "table"}
            onChange={(e) => setDataView(e.target.value)}
          />
          <label>Table Format</label>
        </div>
        <div className="flex space-x-2 items-center">
          <input
            type="radio"
            value="graph"
            checked={dataView === "graph"}
            onChange={(e) => setDataView(e.target.value)}
          />
          <label>Graph Format</label>
        </div>
      </div>
      {data && dataView === 'table' && <TableView data={data}/>}
      {data && dataView === 'graph' && <GraphView data={data}/>}
    </div>
  );
};

export default Histroy;
