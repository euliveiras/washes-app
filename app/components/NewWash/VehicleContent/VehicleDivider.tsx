import { Box, Divider, AbsoluteCenter } from "@chakra-ui/react";
export function VehicleDivider() {
  return (
    <Box
      position="relative"
      padding={8}
      inlineSize="100%"
maxInlineSize={"360px"}
    >
      <Divider />
      <AbsoluteCenter bg="white" px="4">
        ou
      </AbsoluteCenter>
    </Box>
  );
}
