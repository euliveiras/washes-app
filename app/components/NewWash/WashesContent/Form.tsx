import {
  Text,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  CloseButton,
  Box,
} from "@chakra-ui/react";
import type { ChangeEvent } from "react";
import { Form as RemixForm } from "@remix-run/react";
import type { Wash } from ".";
import { format } from "app/components/hooks/useDate";

type FormProps = {
  id: string | number;
  title: string;
  defaultDate: string;
  minDate?: string;
  onChange?(w: Wash): void;
  note: string;
  isCompleted: boolean;
  removeWash(id: number): void;
  cycleId?: string;
  disabled?: boolean;
};

export function Form({
  isCompleted,
  id,
  onChange,
  note,
  title,
  defaultDate,
  minDate,
  removeWash,
  cycleId,
  disabled = false,
}: FormProps) {
  const scheduleDate = format(defaultDate);

  function onFormChange(e: ChangeEvent<HTMLFormElement>) {
    const form = new FormData(e.currentTarget);
    const scheduleDate = form.get("scheduleDate")?.toString() ?? "";
    const note = form.get("note")?.toString() ?? "";
    const isCompleted = form.get("isCompleted") === "";
    const id = form.get("id")?.toString() ?? "";
    onChange &&
      onChange({ note, isCompleted, id: Number(id), scheduleDate, title });
  }

  function onClick() {
    removeWash(Number(id));
  }

  return (
    <Box
      as={RemixForm}
      onChange={onFormChange}
      className="wash-form"
      blockSize="100%"
      inlineSize="100%"
      position="relative"
    >
      <CloseButton onClick={onClick} position="absolute" right={0} top={-4} />
      <Input type="hidden" name="id" value={id} />
      <Input type="hidden" name="cycleId" value={cycleId} />
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
            // min={minDate}
            defaultValue={scheduleDate}
            disabled={disabled}
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
            disabled={disabled}
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
          <Checkbox
            defaultChecked={isCompleted}
            name="isCompleted"
            disabled={disabled}
          />
        </FormControl>
      </Flex>
    </Box>
  );
}
