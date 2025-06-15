import React from "react";
import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export default function Chart({title,datakey,grid,data}) {
  
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis  dataKey="name" stroke="#5550db" />
         <Line type='monotone' dataKey={datakey} stroke="#5550db"/>
         <Tooltip/> 
         {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray='5 5'/>}
         </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
