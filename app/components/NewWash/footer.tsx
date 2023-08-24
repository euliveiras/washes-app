import { Flex, Button, Divider } from "@chakra-ui/react";
import type { FlexProps } from "@chakra-ui/react";
type NewWashFooterProps = {
  containerProps?: FlexProps;
  goBack(): void;
  goNext(): void;
  isPreviousButtonDisable: boolean;
  isNextButtonDisable: boolean;
  isLastStep: boolean;
  onFinish(): void;
};
export function NewWashFooter({
  goNext,
  goBack,
  containerProps,
  isNextButtonDisable,
  isPreviousButtonDisable,
  isLastStep,
  onFinish,
}: NewWashFooterProps) {
  return (
    <Flex
      placeSelf={"flex-end"}
      blockSize="100%"
      align={"center"}
      paddingBlockStart={8}
      {...containerProps}
    >
      {/* <Button
        colorScheme="purple"
        variant="ghost"
        mr={3}
        size="sm"
        onClick={() => goNext()}
        isDisabled={isNextButtonDisable}
      >
        pular
      </Button>*/}
      <Button
        colorScheme="gray"
        variant="ghost"
        mr={3}
        marginInlineEnd="0"
        onClick={() => goBack()}
        isDisabled={isPreviousButtonDisable}
      >
        voltar
      </Button>
      <Divider
        blockSize={"100%"}
        orientation="vertical"
        inlineSize={"8px"}
        borderColor="gray.400"
      />
      {!isLastStep ? (
        <Button
          name="step"
          variant="ghost"
          colorScheme={"blue"}
          onClick={() => goNext()}
          isDisabled={isNextButtonDisable}
        >
          próximo
        </Button>
      ) : (
        <Button
          name="step"
          variant="ghost"
          colorScheme={"blue"}
          onClick={onFinish}
        >
          finalizar
        </Button>
      )}
    </Flex>
  );
}
