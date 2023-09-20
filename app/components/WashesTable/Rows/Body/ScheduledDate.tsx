import { table } from "app/components/Table";
import { format } from "app/components/hooks/useDate";

type Props = {
  scheduledDate: string | Date;
};

export function ScheduledDate({ scheduledDate }: Props) {
  const date = format(scheduledDate, "d 'de' MMMM',' RRRR");
  return <table.Data>{date}</table.Data>;
}
