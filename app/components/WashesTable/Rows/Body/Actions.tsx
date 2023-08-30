import { Flex, IconButton } from "@chakra-ui/react";
import { table } from "~/components/Table";
import { MdClose, MdOutlineCheck } from "react-icons/md";

type Props = {
  isCompleted?: boolean;
};

function CancelButton() {
  return (
    <IconButton
      type="submit"
      value="cancel_wash"
      aria-label="cancel-wash"
      colorScheme={"red"}
      borderRadius="full"
      icon={<MdClose size={20} />}
    />
  );
}

function ConfirmButton() {
  return (
    <IconButton
      type="submit"
      value="confirm_wash"
      aria-label="confirm-wash"
      colorScheme={"green"}
      borderRadius="full"
      icon={<MdOutlineCheck size={20} />}
    />
  );
}

export function Actions({ isCompleted }: Props) {
  return (
    <table.Data>
      <Flex gap={4}>
        {typeof isCompleted === "undefined" && (
          <>
            <CancelButton />
            <ConfirmButton />
          </>
        )}
        {isCompleted === true && <CancelButton />}
        {isCompleted === false && <ConfirmButton />}
      </Flex>
    </table.Data>
  );
}
