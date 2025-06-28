// ChartHours.tsx
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "06:30pm", hours: 11447 },
  { time: "08:15pm", hours: 11449 },
  { time: "09:45pm", hours: 11451 },
  { time: "11:30pm", hours: 11453 },
  { time: "01:15am", hours: 11455 },
  { time: "03:00am", hours: 11457 },
  { time: "04:30am", hours: 11459 },
  { time: "06:15am", hours: 11461 },
  { time: "08:00am", hours: 11463 },
];

const ChartHours = () => {
  return (
    <div className="w-full h-64 bg-[#1f213f] p-4 rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a0ff74" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#a0ff74" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" stroke="#ccc" fontSize={12} angle={-30} textAnchor="end" />
          <YAxis stroke="#ccc" fontSize={12} domain={[11447, 11463]} />
          <CartesianGrid strokeDasharray="3 3" stroke="#2d2f55" />
          <Tooltip contentStyle={{ backgroundColor: "#333", border: "none" }} />
          <Area type="stepAfter" dataKey="hours" stroke="#8aff53" fillOpacity={1} fill="url(#colorHours)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartHours;
