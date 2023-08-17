import { Text, Box, Button, Divider, Grid, Flex } from "@chakra-ui/react";
import { useSearchParams, Link, useLoaderData } from "@remix-run/react";
import { useStepper } from "~/components/NewWash/Stepper";
import { VehicleContent } from "~/components/NewWash/VehicleContent";
import { WashesContent } from "~/components/NewWash/WashesContent";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { mocks } from "../routes/washes-search/route";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const vehicle = JSON.parse(url.searchParams.get("vehicle") ?? "null");
  if (!vehicle?.licensePlate || !vehicle.type) return json({});

  const washCycle = mocks.washCycles.find(
    (w) => w.vehicleId === vehicle.licensePlate,
  );
  const washes = mocks.washes.filter(
    (w) => w.vehicleId === vehicle.licensePlate,
  );

  return json({ washes, washCycle });
}

export default function () {
  const data = useLoaderData<typeof loader>();
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
    <Grid paddingInline={[4, 8]} gridTemplateRows="1fr auto" inlineSize={"100%"}>
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
            whiteSpace="nowrap"
          >
            {steps[step].modalTitle}
          </Text>
          <Box
            inlineSize={"100%"}
            marginInline="auto"
            maxInlineSize={"container.md"}
          >
            {steps[step].label === "vehicle" && <VehicleContent />}
            {steps[step].label === "washes" && (
              <WashesContent washCycle={data.washCycle} washes={data.washes} />
            )}
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
