"use client";
import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/solid";
import { Callout } from "@tremor/react";
type props = {
  message: string;
  warning?: boolean;
};
function CalloutC({ message, warning }: props) {
  return (
    <Callout
      className="mt-4"
      title={message}
      icon={warning ? ExclamationIcon : CheckCircleIcon}
      color={warning ? "rose" : "green"}
    />
  );
}

export default CalloutC;
