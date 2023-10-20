import type { ButtonProps } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import type { MouseEvent } from "react";
import { MdModeEditOutline } from "react-icons/md";

type Props = ButtonProps & {
  isEditing: boolean;
};

export function PageEditButton({
  isEditing,
  ...rest
}: Props) {
  const buttonProps = isEditing ? { color: "gray.400" } : { color: "blue.400" };
  const buttonText = isEditing ? "salvar" : "editar";

  return (
    <Button
      rightIcon={<MdModeEditOutline />}
      variant="ghost"
      fontSize={"sm"}
      {...buttonProps}
      {...rest}
    >
      {buttonText}
    </Button>
  );
}
