import { Box } from "@chakra-ui/react";
import type { Wash } from ".";
import { Container } from "./Container";
import { Form } from "./Form";

type WashesContentProps = {
  washes: Wash[];
  setWashes(wash: Wash): void;
  licensePlate: string;
  addError(): void;
  removeError(): void;
};

export function WashesContent({
  washes,
  setWashes,
  licensePlate,
  addError,
  removeError,
}: WashesContentProps) {
  return (
    <Container
      addError={addError}
      removeError={removeError}
      licensePlate={licensePlate ?? ""}
    >
      {washes?.map((w) => (
        <Box
          key={w.scheduleDate}
          maxInlineSize={"320px"}
          marginInline={[0, 8]}
          border="4px"
          borderColor={"blue.400"}
          borderRadius="lg"
          paddingInline={4}
          paddingBlock={8}
        >
          <Form
            id={w.id}
            onChange={setWashes}
            isCompleted={w.isCompleted}
            title={w.title}
            defaultDate={w.scheduleDate}
            minDate={w.minDate}
            note={w.note ?? ""}
          />
        </Box>
      ))}
    </Container>
  );
}
