import { Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useFetcher } from "@remix-run/react";

type WashesContentProps = {
  licensePlate?: string;
};

export function WashesContent({ licensePlate }: WashesContentProps) {
  const fetcher = useFetcher();

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data === undefined) {
      fetcher.submit(
        { query: licensePlate ?? "" },
        { action: "/washes-search" },
      );
    }
  }, [fetcher, licensePlate]);

  console.log(licensePlate, fetcher?.data);
  return (
    <>
      <Text>washes content</Text>
    </>
  );
}
