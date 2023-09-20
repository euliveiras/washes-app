import { FormControl, Input, InputGroup } from "@chakra-ui/react";
import type { InputProps } from "@chakra-ui/react";
import { useRef } from "react";
import type { ChangeEvent } from "react";

type SearchInputProps = Omit<InputProps, "onChange"> & {
  onChange(value: string): void;
};

export function SearchInput({ onChange, ...rest }: SearchInputProps) {
  const timeoutId = useRef<number | undefined>(null);

  function onInputQueryChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    timeoutId.current && clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => onChange(value), 1000);
  }

  return (
    <FormControl>
      <InputGroup>
        <Input rounded={"full"} onChange={onInputQueryChange} {...rest} />
      </InputGroup>
    </FormControl>
  );
}
