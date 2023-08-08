import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { Modal } from "./Modal";

export function useNewWashModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef<HTMLElement>(null);

  return {
    isNewWashModalOpen: isOpen,
    onNewWashModalOpen: onOpen,
    onNewWashModalClose: onClose,
    newWashModalRef: ref,
    NewWashModal: Modal,
  };
}
