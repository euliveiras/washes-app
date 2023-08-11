import { Text, Box, Button, Divider, Grid, Flex } from "@chakra-ui/react";
import { useSearchParams, Link } from "@remix-run/react";
import { useStepper } from "~/components/NewWashModal/Stepper";
import { VehicleContent } from "~/components/NewWashModal/VehicleContent";

const content = [<VehicleContent key="vehicle-content" />];

export default function () {
  const [searchParams] = useSearchParams();
  const { Stepper, steps } = useStepper();

  const step = Number(searchParams.get("step") ?? 0);
  const stepValue = JSON.parse(searchParams.get(steps[step].label) ?? "null");
  const isEqualOrGreaterThanZero = step - 1 >= 0;
  const isLowerThanStepLength = step < steps.length - 1;
  const previousUrlParams = new URLSearchParams(searchParams);
  const nextUrlParams = new URLSearchParams(searchParams);

  previousUrlParams.set("step", (step - 1).toString());
  nextUrlParams.set("step", (step + 1).toString());

  return (
    <Grid paddingInline={8} gridTemplateRows="1fr auto" inlineSize={"100%"}>
      <Grid
        gridAutoFlow="column"
        gap="1.125em"
        gridTemplateColumns={"auto 1fr"}
        gridTemplateRows={"100%"}
        marginInline={[0, 0, 4]}
        paddingBlockStart={[4, 4, 8]}
      >
        <Stepper activeStep={step} steps={steps} />
        <Grid
          blockSize="100%"
          inlineSize={"100%"}
          paddingInline={4}
          gridAutoRows="min-content"
        >
          <Text
            placeSelf={"center"}
            as="h1"
            fontSize={"2xl"}
            marginBlockEnd={4}
          >
            {steps[step].modalTitle}
          </Text>
          <Box
            inlineSize={"100%"}
            marginInline="auto"
            maxInlineSize={"container.md"}
          >
            {content[step]}
          </Box>
        </Grid>
      </Grid>

      <Flex
        placeSelf={"flex-end"}
        blockSize="100%"
        align={"center"}
        paddingBlock={8}
      >
        <Button
          as={Link}
          key="jump-btn"
          isDisabled={!steps[step].isNullable}
          colorScheme="purple"
          variant="ghost"
          mr={3}
          size="sm"
          to={`/new-wash?${nextUrlParams.toString()}`}
        >
          pular
        </Button>
        <Button
          as={Link}
          key="back-btn"
          colorScheme="gray"
          variant="ghost"
          mr={3}
          isDisabled={!isEqualOrGreaterThanZero}
          to={`/new-wash?${previousUrlParams.toString()}`}
          marginInlineEnd="0"
        >
          voltar
        </Button>
        <Divider
          blockSize={"100%"}
          orientation="vertical"
          inlineSize={"8px"}
          borderColor="gray.400"
        />
        {step === steps.length - 1 ? (
          <Button key="finish-btn" variant="ghost" colorScheme={"blue"}>
            finalizar
          </Button>
        ) : (
          <Button
            as={Link}
            key="next-btn"
            isDisabled={!stepValue || !isLowerThanStepLength}
            variant="ghost"
            colorScheme={"blue"}
            to={`/new-wash?${nextUrlParams.toString()}`}
          >
            próximo
          </Button>
        )}
      </Flex>
    </Grid>
  );
}
