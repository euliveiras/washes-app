import { Text } from "@chakra-ui/react";

export function PageLabel({ label }: { label: string }) {
  return (
    <Text color={"gray.500"} fontSize={"sm"} fontWeight={"semibold"}>
      {label}
    </Text>
  );
}
