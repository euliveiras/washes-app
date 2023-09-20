import { Text, Grid, HStack} from "@chakra-ui/react";
import { LinkHighlighted } from "~/components/LinkHighlighted";

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
        <LinkHighlighted to="/home">
          <Text fontSize="lg">/ home</Text>
        </LinkHighlighted>
      </HStack>
    </Grid>
  );
}
