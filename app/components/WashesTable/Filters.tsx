import { Input, Select } from "@chakra-ui/react";
import type {
  InputProps as ChakaInputProps,
  SelectProps,
  InputProps,
} from "@chakra-ui/react";

type DateInputProps = ChakaInputProps;

type StatusInputProps = SelectProps;

export function Status({ ...rest }: StatusInputProps) {
  return (
    <Select
      maxInlineSize="260px"
      minBlockSize={12}
      placeholder="Status da lavagem"
      variant="outline"
      colorScheme={"gray"}
      borderRadius="full"
      display="flex"
      alignItems={"center"}
      {...rest}
    >
      <option value="COMPLETED">Completa</option>
      <option value="INCOMPLETED">Incompleta</option>
      <option value="ALL">Todas</option>
    </Select>
  );
}

export function Date({ ...rest }: DateInputProps) {
  return (
    <Input
      type="date"
      variant="outline"
      borderRadius={"full"}
      maxInlineSize="260px"
      minBlockSize={12}
      {...rest}
    />
  );
}

export function Search({ ...props }: InputProps) {
  return (
    <Input
      type="text"
      name="licensePlate"
      placeholder="Procurar placa"
      variant="outline"
      borderRadius={"full"}
      maxInlineSize="260px"
      minBlockSize={12}
      {...props}
    />
  );
}
