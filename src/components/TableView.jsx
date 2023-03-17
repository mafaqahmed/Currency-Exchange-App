import React from "react";

const TableView = ({ data }) => {
  return (
    <div className="mt-10 text-white">
      <table className="md:table-fixed text-xs sm:text-lg">
        <thead>
          <tr className="border-b-2 border-red-700">
            <th className="sm:px-5">Date</th>
            <th className="sm:px-5">Amount</th>
            <th className="sm:px-5">From Currency</th>
            <th className="sm:px-5">To Currency</th>
            <th className="sm:px-5">Result</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(item => {
              return (
                <tr key={item.date} className='sm:font-semibold'>
                  <td className="text-center">{item.date.slice(0,10)}</td>
                  <td className="text-center">{item.amount}</td>
                  <td className="text-center">{item.fromCurrency}</td>
                  <td className="text-center">{item.toCurrency}</td>
                  <td className="text-center">{item.result}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
