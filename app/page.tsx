"use client";
import CityPicker from "@/components/CityPicker";
import { Card, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 gradient">
      <Card className="max-w-4xl mx-auto bg-backgroundMain">
        <Text className="mb-10 text-6xl font-bold text-center textgradient">
          Cloud
        </Text>
        <Subtitle className="text-xl text-center text-subtitle ">
          Powered by Next 13.3, Tailwind CSS, Tremor 2.0
        </Subtitle>

        <hr className="  m-10 border-t-[2px] border-violet-300" />
        <Card className="gradient">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
