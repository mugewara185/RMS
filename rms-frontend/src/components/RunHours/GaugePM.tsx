import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const GaugePM = ({ percentage = 60 }) => {
  const data = [
    { name: "completed", value: percentage },
    { name: "remaining", value: 100 - percentage },
  ];

  // Dynamic color logic
  const getColor = (percent) => {
    if (percent <= 40) return "#EF4444";      // red
    if (percent <= 70) return "#FACC15";      // yellow
    return "#22C55E";                         // green
  };

  const COLORS = [getColor(percentage), "#2D2A53"];

  return (
    <div className="w-full flex flex-col items-center pt-2 pb-6">
      <p className="text-sm text-gray-300 mb-1">Percentage to reach PM</p>

      {/* Wrap chart in a non-clipping container */}
      <div className="relative" style={{ width: "160px", height: "100px" }}>
        <PieChart width={160} height={100}>
          <Pie
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius={50}
            outerRadius={70}
            dataKey="value"
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        {/* Centered label */}
        <div className="absolute left-1/2 top-[50%] transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold"
             style={{ color: getColor(percentage) }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default GaugePM;
