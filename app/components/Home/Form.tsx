import {
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  InputLeftAddon,
  Button,
} from "@chakra-ui/react";
import type {
  InputProps as ChakaInputProps,
  SelectProps,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Form as RemixForm } from "@remix-run/react";
import { MdCalendarToday, MdQuestionMark } from "react-icons/md";
import { LuExternalLink } from "react-icons/lu";
import { format } from "../hooks/useDate";

type DateInputProps = ChakaInputProps & {
  icon: ReactNode;
};

type StatusInputProps = SelectProps;

function StatusInput({ ...rest }: StatusInputProps) {
  return (
    <Flex>
      <MdQuestionMark />
      <Select defaultValue={"ALL"} variant="unstyled" {...rest}>
        <option value="COMPLETED">Completa</option>
        <option value="INCOMPLETED">Incompleta</option>
        <option value="ALL">Todas</option>
      </Select>
    </Flex>
  );
}

function DateInput({ icon, name, ...rest }: DateInputProps) {
  return (
    <InputGroup>
      <InputLeftElement>{icon}</InputLeftElement>
      <Input type="" name={name} {...rest} />
    </InputGroup>
  );
}

function SearchInput() {
  return (
    <InputGroup>
      <InputLeftAddon>Placa</InputLeftAddon>
      <Input type="text" name="licensePlate" />
    </InputGroup>
  );
}

function ExportButton() {
 return <Button leftIcon={<LuExternalLink />} value="EXPORT" type="submit">
    exportar
  </Button>;
}

function Filters() {
  const minDate = format(new Date());
  return (
    <Box>
      <SearchInput />
      <Box>
        <DateInput icon={<MdCalendarToday />} name="startDate" min={minDate} />
        <Text>até</Text>
        <DateInput icon={<MdCalendarToday />} name="endDate" min={minDate} />
      </Box>
      <StatusInput name="status" />
      <ExportButton />
      <Button type="submit">filtrar</Button>
    </Box>
  );
}

export function Form() {
  return (
    <RemixForm>
      <Filters />
    </RemixForm>
  );
}
