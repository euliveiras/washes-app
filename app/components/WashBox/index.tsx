import { LinkBox } from "~/components/LinkBox";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import { dateManipulator } from "../.././../src/domain/shared/date-manipulator";

type WashBoxProps = {
  wash: {
    id: string;
    scheduleDate: string;
    note?: string;
  };
};

export function WashBox({ wash }: WashBoxProps) {
  const title = dateManipulator.format(wash.scheduleDate, "d/LL");
  const date = dateManipulator.format(wash.scheduleDate, "d 'de' MMMM, eeee");

  return (
    <LinkBox.Container to={`/wash/${wash.id}`}>
      <LinkBox.Content>
        <LinkBox.Title>{title}</LinkBox.Title>
        <Text fontSize={"lg"}>{date}</Text>
        {wash.note && <Text>{wash.note}</Text>}
      </LinkBox.Content>
      <LinkBox.Icon icon={<FaExternalLinkAlt size={16} />} />
    </LinkBox.Container>
  );
}
