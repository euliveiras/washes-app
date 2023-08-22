import {Box, Text, Flex, Grid, Button } from "@chakra-ui/react";
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
  return <Text>{text}</Text>;
}

function Note({ note }: { note: string }) {
  return note !== "" ? (
    <Flex gap={2} fontSize="sm">
      <Text fontWeight={"semibold"}>nota:</Text>
      <Text>{note.slice(0, 5) + "..."}</Text>
    </Flex>
  ) : (
    <Text>sem nota</Text>
  );
}

export function WashesSummary({ goTo, washes }: WashesSummaryProps) {
  return (
    <Flex gap={4} align="center" flexDir={"column"} inlineSize="100%">
      <Text as="h2">Informações das lavagens</Text>
      <Grid
        blockSize="100%"
        inlineSize="100%"
        gap={4}
        gridTemplateColumns="100%"
      >
        {washes.map((w) => (
          <Button
            key={w.id}
            rightIcon={<HiExternalLink size={20} />}
            inlineSize="100%"
            blockSize={"fit-content"}
            fontSize={"sm"}
            padding={8}
            onClick={() => goTo()}
            variant="outline"
          >
            <Flex
              flexDir="column"
              blockSize="fit-content"
              gap={1}
              marginInlineEnd={"auto"}
              align="start"
            >
              <ScheduleDate date={w.scheduleDate} />
              {w.isCompleted && <Text>feita</Text>}
              <Note note={"Alguma nota aleatória"} />
            </Flex>
          </Button>
        ))}
      </Grid>
    </Flex>
  );
}
