import * as React from "react";

const dateSize = 15;
const widthTrim = 5;
const height = (dateSize + 2) * 7;
const futureColor = "36, 17%, 89%";
const pastColor = (n: number) => `${n / 3 + 20}, 100%, ${60 + 1.2 * (n / 7)}%`;

export function daysIntoYear(date: Date) {
  return (
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
      Date.UTC(date.getFullYear(), 0, 0)) /
    24 /
    60 /
    60 /
    1000
  );
}

export const percentPassedOfYear = (date: Date) => {
  return daysIntoYear(date) / 364;
};

export function App() {
  const today = daysIntoYear(new Date());
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
                  index + 1 <= today
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
          marginLeft: `${(dateSize + 1 - widthTrim) * Math.ceil(50 / 7) + 1}px`,
          borderLeft: "1px solid hsl(36, 6%, 37%)",
          color: "hsl(36, 6%, 37%)",
          paddingTop: "10px",
          paddingLeft: "3px",
          fontFamily: "sans-serif",
        }}
      >
        {today}
      </div>
    </>
  );
}
