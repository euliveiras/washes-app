import { Input, InputGroup, InputRightElement, Icon } from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";

export function SearchInput() {
  return (
    <InputGroup
      display={["none", "none", "block"]}
      role="group"
      sx={{ "input:focus ~ div": { svg: { color: "blackAlpha.900" } } }}
      maxInlineSize={96}
    >
      <Input
        placeholder="Procure qualquer coisa"
        borderRadius="full"
        focusBorderColor="blackAlpha.900"
        type="search"
        name="query"
      />
      <InputRightElement pointerEvents={"none"} fontSize={26}>
        <Icon
          color={"gray.200"}
          as={MdOutlineSearch}
          transitionDuration="200ms"
          transitionProperty={"all"}
          _groupHover={{ color: "gray.300" }}
        />
      </InputRightElement>
    </InputGroup>
  );
}
