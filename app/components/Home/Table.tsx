import { table } from "app/components/Table";

type TableProps = {
  data: any;
};

export function Table({ data }: TableProps) {
  return (
    <table.Table>
      <table.Head>
        <table.Label>first</table.Label>
        <table.Label>second</table.Label>
        <table.Label>third</table.Label>
      </table.Head>
      <table.Body>
        <table.Row>
          <table.Data>first</table.Data>
          <table.Data>second</table.Data>
          <table.Data>third</table.Data>
        </table.Row>
      </table.Body>
    </table.Table>
  );
}
