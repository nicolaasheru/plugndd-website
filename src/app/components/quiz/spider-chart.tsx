"use client";
import type { SpiderData } from "@/constants/dna-types";
import { spiderLabels } from "@/constants/dna-types";

interface SpiderChartProps {
  data: SpiderData;
}

export default function SpiderChart({ data }: SpiderChartProps) {
  const size = 500;
  const center = size / 2;
  const levels = 5;
  const maxValue = 10;

  const values = spiderLabels.map((item) => data[item.key as keyof SpiderData]);

  const angleStep = (2 * Math.PI) / spiderLabels.length;
  const startAngle = -Math.PI + angleStep / 2 + angleStep;

  const getPoint = (index: number, value: number) => {
    const angle = startAngle + index * angleStep;
    const radius = (value / maxValue) * (center - 100);
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  };

  const getLabelPoint = (index: number) => {
    const angle = startAngle + index * angleStep;
    const radius = center - 40;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  };
  // Generate polygon points for data
  const dataPoints = values
    .map((value, index) => {
      const point = getPoint(index, value);
      return `${point.x},${point.y}`;
    })
    .join(" ");

  // Generate grid levels
  const gridLevels = Array.from({ length: levels }, (_, i) => {
    const levelValue = ((i + 1) / levels) * maxValue;
    const points = spiderLabels
      .map((_, index) => {
        const point = getPoint(index, levelValue);
        return `${point.x},${point.y}`;
      })
      .join(" ");
    return points;
  });

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-[550px] mx-auto"
      >
        {/* Grid levels */}
        {gridLevels.map((points, index) => (
          <polygon
            key={`grid-${index}`}
            points={points}
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="0.5"
          />
        ))}

        {/* Axis lines - from center to outer vertices */}
        {spiderLabels.map((_, index) => {
          const outerPoint = getPoint(index, maxValue);
          return (
            <line
              key={`axis-${index}`}
              x1={center}
              y1={center}
              x2={outerPoint.x}
              y2={outerPoint.y}
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="0.5"
            />
          );
        })}

        {/* Data polygon */}
        <polygon
          points={dataPoints}
          fill="rgba(53, 113, 163, 0.5)"
          stroke="#92d5e3"
          strokeWidth="1.5"
        />

        {/* Labels */}
        {spiderLabels.map((item, index) => {
          const point = getLabelPoint(index);
          const lines = item.label.split("\n");
          return (
            <text
              key={`label-${index}`}
              x={point.x}
              y={point.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground text-md md:text-sm font-medium"
            >
              {lines.map((line, lineIndex) => (
                <tspan
                  key={`line-${lineIndex}`}
                  x={point.x}
                  dy={lineIndex === 0 ? 0 : 13}
                >
                  {line}
                </tspan>
              ))}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
