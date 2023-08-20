import {
  Text,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import type { ChangeEvent } from "react";
import { Form as RemixForm } from "@remix-run/react";
import type { Wash } from ".";

type FormProps = {
  id: string | number;
  title: string;
  defaultDate: string;
  minDate?: string;
  onChange(w: Wash): void;
  note: string;
  isCompleted: boolean;
};

export function Form({
  isCompleted,
  id,
  onChange,
  note,
  title,
  defaultDate,
  minDate,
}: FormProps) {
  function onFormChange(e: ChangeEvent<HTMLFormElement>) {
    const form = new FormData(e.currentTarget);
    const scheduleDate = form.get("scheduleDate")?.toString() ?? "";
    const note = form.get("note")?.toString() ?? "";
    const isCompleted = form.get("isCompleted") === "";
    const id = form.get("id")?.toString() ?? "";
    onChange({ note, isCompleted, id: Number(id), scheduleDate, title });
  }

  return (
    <RemixForm
      onChange={onFormChange}
      style={{ blockSize: "100%", inlineSize: "100%" }}
    >
      <Input type="hidden" name="id" value={id} />
      <Flex
        maxInlineSize={"360px"}
        flexDir={"column"}
        gap={6}
        marginInline="auto"
      >
        <Text marginInline={"auto"} marginBlockStart={2} fontSize={"lg"}>
          {title}
        </Text>
        <FormControl as={Flex} flexDir="column" align="center">
          <FormLabel inlineSize={"fit-content"}>data</FormLabel>
          <Input
            name="scheduleDate"
            inlineSize={"180px"}
            type="date"
            min={minDate}
            defaultValue={defaultDate}
          />
          <FormHelperText color="gray.400">mês/dia/ano</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel inlineSize={"fit-content"} marginInline={"auto"}>
            notas
          </FormLabel>
          <Textarea
            name="note"
            noOfLines={6}
            placeholder="escreva notas sobre esta lavagem"
            resize="none"
            defaultValue={note}
          />
        </FormControl>
        <FormControl
          as={Flex}
          inlineSize="fit-content"
          marginInline={"auto"}
          align={"center"}
        >
          <FormLabel marginBlock={0} marginInlineEnd={6}>
            lavagem feita?
          </FormLabel>
          <Checkbox defaultChecked={isCompleted} name="isCompleted" />
        </FormControl>
      </Flex>
    </RemixForm>
  );
}
