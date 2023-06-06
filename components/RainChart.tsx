"use client";
import { AreaChart, Card, Title } from "@tremor/react";
import React from "react";
type props = {
  results: Root;
};
function RainChart({ results }: props) {
  /*//! here I take the time and change format and select first 24 hour */
  const hourly = results?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
      })
    )
    .slice(1, 25);
  /*//! here I create data object from hourly and othe infos */
  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    "Rain (%)": results?.hourly.precipitation_probability[i],
  }));
  /*//! here I made simple function to format values */
  const dataFormatter = (value: number) => `${value} %`;
  return (
    <Card>
      <Title>Cahnces of Rain</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={["Rain (%)"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
        minValue={0}
        yAxisWidth={40}
        maxValue={100}
      />
    </Card>
  );
}

export default React.memo(RainChart);
