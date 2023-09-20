import { table } from "app/components/Table";

type Props = {
  note: string;
};

export function Note({ note }: Props) {
  return <table.Data>{note}</table.Data>;
}
