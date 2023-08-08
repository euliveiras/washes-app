import { FormControl, Input, InputGroup } from "@chakra-ui/react";
import type { InputProps } from "@chakra-ui/react";
import { useRef } from "react";
import type { ChangeEvent } from "react";

interface SearchInputProps extends InputProps {
  onInputQueryChange(e: HTMLFormElement | null): void;
}

export function SearchInput(searchInputProps: SearchInputProps) {
  const timeoutId = useRef<number | undefined>(null);

  function onInputQueryChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.form) return;

    timeoutId.current && clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(
      () => searchInputProps.onInputQueryChange(e.target.form),
      1000,
    );
  }

  return (
    <FormControl>
      <InputGroup>
        <Input
          name="query"
          rounded={"full"}
          onChange={onInputQueryChange}
          {...searchInputProps}
        />
      </InputGroup>
    </FormControl>
  );
}
