import { Tbody, Td } from "@chakra-ui/react";
import type { TableRowProps } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

type TableCellsProps = {
  children: ReactNode;
  onIntersecting(lastElement?: Element): void;
};

export function TableData({ children }: TableRowProps & { children: ReactNode }) {
  return <Td>{children}</Td>;
}

export function Body({ children, onIntersecting }: TableCellsProps) {
  const ref = useRef<HTMLTableSectionElement | null>(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    const element = ref.current?.lastElementChild ?? undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersecting(element);
      });
    }, options);

    element && observer.observe(element);

    return () => element && observer.unobserve(element);
  }, [onIntersecting, ref]);
  return <Tbody ref={ref}>{children}</Tbody>;
}
