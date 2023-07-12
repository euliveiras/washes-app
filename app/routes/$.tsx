import { Text, Link, Highlight, Grid, HStack, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function () {
  return (
    <Grid
      placeContent="center"
      placeItems="center"
      blockSize={"100dvh"}
      inlineSize="100%"
      gap={4}
    >
      <Text fontSize="lg">Essa página não existe :(</Text>
      <HStack spacing={1}>
        <Text fontSize="lg">Go back</Text>
        <Link as={RouterLink} to="/home">
          <Box
            position={"relative"}
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
            <Text fontSize="lg">/ home</Text>
          </Box>
        </Link>
      </HStack>
    </Grid>
  );
}
