import { table } from "app/components/Table";

type Props = {
  driver: string;
};

export function Driver({ driver }: Props) {
  return <table.Data>{driver}</table.Data>;
}
