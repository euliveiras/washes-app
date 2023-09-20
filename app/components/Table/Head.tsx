import { Thead, Th } from "@chakra-ui/react";
import type { ReactNode } from "react";

type TableHeadProps = {
  children: ReactNode;
};

type HeadDataProps = {
  children: ReactNode;
};

export function HeadData({ children }: HeadDataProps) {
  return <Th>{children}</Th>;
}

export function Head({ children }: TableHeadProps) {
  return <Thead>{children}</Thead>;
}
