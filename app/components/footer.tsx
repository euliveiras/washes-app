import { Text, Center, Link } from "@chakra-ui/react";
import { BsMoonStars } from "react-icons/bs";

export function Footer() {
  return (
    <Center textAlign={"center"} paddingBlock={0.5} gap={2} bg={"blue.500"}>
      <Text fontSize={"xs"} color="white">
        Feito por{" "}
        <Link target="_blank" href="https://github.com/euliveiras">
          @euliveiras
        </Link>
      </Text>

      <BsMoonStars size={"12px"} color="white" />
    </Center>
  );
}
