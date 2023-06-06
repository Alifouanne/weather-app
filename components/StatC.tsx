import { Card, Color, Metric, Text } from "@tremor/react";
type props = {
  title: string;
  metric: string;
  color?: Color;
};
function StatC({ title, metric, color }: props) {
  return (
    <Card decorationColor={color} decoration="top">
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
}

export default StatC;
