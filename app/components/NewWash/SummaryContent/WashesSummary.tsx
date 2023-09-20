import { Text, Flex, Grid, Button } from "@chakra-ui/react";
import { HiExternalLink } from "react-icons/hi";
import type { Wash } from "../WashesContent";
import { useDate } from "~/components/hooks/useDate";
type WashesSummaryProps = {
  washes: Wash[];
  goTo(): void;
};

function ScheduleDate({ date }: { date: string }) {
  const { format } = useDate();
  const text = format(date, "d/MM");
  return <Text fontSize={"md"}>{text}</Text>;
}

function Note({ note }: { note: string }) {
  return note !== "" ? (
    <Flex gap={2} fontSize="sm">
      <Text fontWeight={"semibold"}>nota:</Text>
      <Text fontWeight={"light"}>{note.slice(0, 5) + "..."}</Text>
    </Flex>
  ) : (
    <Text>sem nota</Text>
  );
}

export function WashesSummary({ goTo, washes }: WashesSummaryProps) {
  return (
    <Flex
      paddingBlock={[4, 8]}
      paddingInline={[0, 4, 8]}
      gap={4}
      align="center"
      justify="center"
      flexDir={"column"}
      inlineSize="100%"
      border="1px"
      borderWidth={"medium"}
      borderColor="blue.400"
      borderRadius={"2xl"}
    >
      <Text as="h2">Informações das lavagens</Text>
      <Grid
        blockSize="100%"
        inlineSize="100%"
        gap={4}
        gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
        placeItems="center"
      >
        {washes.map((w) => (
          <Button
            key={w.id}
            rightIcon={<HiExternalLink size={20} />}
            inlineSize="fit-content"
            blockSize={"fit-content"}
            fontSize={"sm"}
            padding={4}
            onClick={() => goTo()}
            variant="outline"
          >
            <Flex
              flexDir="column"
              blockSize="fit-content"
              gap={1}
              paddingInlineEnd={4}
              marginInlineEnd={"auto"}
              align="start"
            >
              <ScheduleDate date={w.scheduleDate} />
              <Note note={w.note} />
              {w.isCompleted && (
                <Flex>
                  <Text fontStyle="italic" fontSize={"sm"}>
                    lavagem já feita
                  </Text>
                </Flex>
              )}
            </Flex>
          </Button>
        ))}
      </Grid>
    </Flex>
  );
}
