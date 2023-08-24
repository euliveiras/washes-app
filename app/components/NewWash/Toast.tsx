import { useRef } from "react";
import { useToast as chakraUseToast } from "@chakra-ui/react";
import type { ToastId } from "@chakra-ui/react";

export function useToast() {
  const toastIdRef = useRef<ToastId>("");
  const toast = chakraUseToast();

  function close() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }

  function showErrorToast(message: string) {
    toastIdRef.current = toast({
      description: message,
      isClosable: true,
      status: "error",
      title: "Erro",
    });
  }

  return { showErrorToast, close };
}
