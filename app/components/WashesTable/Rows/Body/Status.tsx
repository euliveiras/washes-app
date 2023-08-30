import { Alert, Text } from "@chakra-ui/react";
import type { AlertProps } from "@chakra-ui/react";
import { table } from "app/components/Table";

type Label = "Atrasada" | "Aguardando" | "Confirmado";

type Props = AlertProps & {
  label: Label;
};

export function Status({ label, ...rest }: Props) {
  function getTextColor(label: Label): string {
    if (label === "Atrasada") return "red.400";
    else if (label === "Aguardando") return "blue.400";
    else return "green.400";
  }
  const color = getTextColor(label);

  return (
    <table.Data>
      <Alert borderRadius={"full"} justifyContent="center" {...rest}>
        <Text color={color}>{label}</Text>
      </Alert>
    </table.Data>
  );
}
