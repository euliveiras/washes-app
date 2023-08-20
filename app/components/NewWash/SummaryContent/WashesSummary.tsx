import { Text, Box, Checkbox, Grid, FormLabel } from "@chakra-ui/react";
import type { Wash } from "../WashesContent";
import { useDate } from "~/components/hooks/useDate";
type WashesSummaryProps = {
  washes: Wash[];
};

function ScheduleDate({ date }: { date: string }) {
  const { format } = useDate();
  const text = format(date, "d 'de' MMMM','EEEE");
  return <Text>{text}</Text>;
}

function Note({ note }: { note: string }) {
  return note !== "" ? <Text>{note}</Text> : <Text>sem nota</Text>;
}

export function WashesSummary({ washes }: WashesSummaryProps) {
  return (
    <Grid>
      {washes.map((w) => (
        <Box key={w.id}>
          <ScheduleDate date={w.scheduleDate} />
          <FormLabel htmlFor="is-completed">completa?</FormLabel>
          <Checkbox id="is-completed" isChecked={w.isCompleted} readOnly />
          <Note note={w.note} />
        </Box>
      ))}
    </Grid>
  );
}
