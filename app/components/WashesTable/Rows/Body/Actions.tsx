import { Flex, IconButton, Input } from "@chakra-ui/react";
import { table } from "~/components/Table";
import { MdClose, MdOutlineCheck } from "react-icons/md";
import { Form } from "@remix-run/react";

type Props = {
  isCompleted?: boolean;
  id?: string;
};

function CancelButton() {
  return (
    <IconButton
      type="submit"
      value="false"
      name="isCompleted"
      aria-label="cancel-wash"
      colorScheme={"red"}
      borderRadius="full"
      icon={<MdClose size={20} />}
      onClick={(e) => e.stopPropagation()}
    />
  );
}

function ConfirmButton() {
  return (
    <IconButton
      type="submit"
      value="true"
      name="isCompleted"
      aria-label="confirm-wash"
      colorScheme={"green"}
      borderRadius="full"
      icon={<MdOutlineCheck size={20} />}
      onClick={(e) => e.stopPropagation()}
    />
  );
}

export function Actions({ isCompleted, id }: Props) {
  return (
    <table.Data>
      <Flex as={Form} method="PUT" gap={4}>
        <Input type="hidden" readOnly name="id" value={id} />
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
