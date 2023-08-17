import { Link, Box } from "@chakra-ui/react";
import type { LinkProps } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  to: string;
  children: ReactNode;
  LinkProps?: LinkProps;
};

export function LinkHighlighted({ to, children, LinkProps }: Props) {
  return (
    <Link marginInline={1} {...LinkProps} as={RouterLink} to={to}>
      <Box
        position={"relative"}
        inlineSize="fit-content"
        zIndex={1}
        _before={{
          content: "''",
          position: "absolute",
          width: "calc(100% + 4px)",
          height: "60%",
          left: "-2px",
          bottom: "0",
          zIndex: "-1",
          transform: "rotate(-2deg)",
          bgColor: "#D6BCFA",
        }}
      >
        {children}
      </Box>
    </Link>
  );
}
