import * as React from "react";

const dateSize = 15;
const widthTrim = 5;
const height = 113;
const futureColor = "36, 17%, 89%";
const pastColor = (n: number) => `${n / 3 + 20}, 100%, ${60 + 1.2 * (n / 7)}%`;

export function daysIntoYear(date: Date): number {
  return (
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
      Date.UTC(date.getFullYear(), 0, 0)) /
    24 /
    60 /
    60 /
    1000
  );
}

export const percentIntoYear = (date: Date): number => {
  return daysIntoYear(date) / 364;
};

export const weeksIntoYear = (date: Date): number => {
  return Math.ceil(daysIntoYear(date) / 7);
};

export function App() {
  const today = new Date();
  const days = daysIntoYear(today);
  const weeks = weeksIntoYear(today);
  return (
    <>
      <div
        className="App"
        style={{
          width: "100%",
          height: `${height}px`,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column-reverse",
          alignContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {Array(364)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              style={{
                backgroundColor:
                  index + 1 <= days
                    ? `hsl(${pastColor(index)})`
                    : `hsl(${futureColor})`,
                border: "1px solid white",
                borderTop: 0,
                borderLeft: 0,
                width: `${dateSize - widthTrim}px`,
                height: `${dateSize}px`,
              }}
            ></div>
          ))}
      </div>
      <div
        style={{
          marginLeft: `${(dateSize + 1 - widthTrim) * weeks - 1}px`,
          borderLeft: "1px solid hsl(36, 6%, 37%)",
          color: "hsl(36, 6%, 37%)",
          paddingTop: "10px",
          paddingLeft: "3px",
          fontFamily: "sans-serif",
        }}
      >
        <span className="days">{days} days</span>{" "}
        <span className="percent">{Math.ceil(days / 3.64)}%</span>
      </div>
    </>
  );
}
