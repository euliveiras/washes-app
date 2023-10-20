import { Button } from "@chakra-ui/react";
import { MdModeEditOutline } from "react-icons/md";

export function PageEditButton({ isEditing }: { isEditing: boolean }) {
  const buttonProps = isEditing ? { color: "gray.400" } : { color: "blue.400" };
  const buttonText = isEditing ? "salvar" : "editar";
  return (
    <Button
      rightIcon={<MdModeEditOutline />}
      variant="ghost"
      fontSize={"sm"}
      {...buttonProps}
    >
      {buttonText}
    </Button>
  );
}
