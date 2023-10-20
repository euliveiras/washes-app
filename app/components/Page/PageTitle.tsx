import { Text } from "@chakra-ui/react";

export function PageTitle({ title }: { title: string }) {
  return (
    <Text fontSize={"xx-large"} fontWeight={"bold"}>
      {title}
    </Text>
  );
}
