import React, { useMemo, useState } from "react";
import "./index.css";
import { useTable } from "react-table";
import AnimateHeight from 'react-animate-height';

const InfoTable = ({ title, tableColumns, tableRows }) => {
  const [height, setHeight] = useState('auto');
  const [textHeight, setTextHeight] = useState(0);

  const columns = useMemo(() => tableColumns, []);
  const data = useMemo(() => tableRows, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className="relative info-table">
      <img
        aria-expanded={height !== 0}
        onClick={() => {
          setHeight(height === 0 ? 'auto' : 0)
          setTextHeight(textHeight === 0 ? 'auto' : 0)
        }}
        src="assets/images/arrow-down-white.svg"
        alt="arrow down"
        className={`absolute top-2 right-0 cursor-pointer transition-all ${!height && '-rotate-180' }`}
      />
      <h3 className="font-['Roboto'] font-semibold text-lg text-white pr-20">{title}</h3>
      {
        <AnimateHeight
          id="toggle-text"
          duration={500}
          height={textHeight}
        >
          <p className="text-green-500 font-medium mb-5">Mahalla hududida joylashgan ijtimoiy obyeklar soni 22 ta</p>
        </AnimateHeight>
      }
      <AnimateHeight
        id="toggle-panel"
        duration={500}
        height={height}
      >
        <table {...getTableProps()} className="mb-7 mt-4">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </AnimateHeight>
    </div>
  );
};

export default InfoTable;
