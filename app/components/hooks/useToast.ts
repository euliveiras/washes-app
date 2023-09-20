import { useRef, useCallback } from "react";
import { useToast as chakraUseToast } from "@chakra-ui/react";
import type { ToastId, UseToastOptions } from "@chakra-ui/react";

export const useToast = () => {
  const toastIdRef = useRef<ToastId>("");
  const toast = chakraUseToast();

  const close = useCallback(() => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }, [toast]);

  const showErrorToast = useCallback(
    ({
      message,
      title,
      ...rest
    }: {
      message: string;
      title?: string;
      rest?: UseToastOptions;
    }) => {
      toastIdRef.current = toast({
        description: message,
        isClosable: true,
        status: "error",
        title: title ?? "Erro",
        position: "top",
        ...rest,
      });
    },
    [toast],
  );

  const showSuccessToast = useCallback(
    ({
      message,
      title,
      ...rest
    }: {
      message: string;
      title?: string;
      rest?: UseToastOptions;
    }) => {
      toastIdRef.current = toast({
        description: message,
        isClosable: true,
        status: "success",
        title: title ?? "Tudo certo",
        position: "top",
        ...rest,
      });
    },
    [toast],
  );

  return { showErrorToast, close, showSuccessToast };
};
