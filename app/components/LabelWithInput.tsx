import type { GridProps, InputProps, TextProps } from "@chakra-ui/react";
import { Grid, Input, Text } from "@chakra-ui/react";

type Props = {
  editing: boolean;
  inputProps: InputProps;
  labelProps: TextProps & { label: string };
  containerProps?: GridProps;
};

export function InputWithLabel({
  editing,
  inputProps,
  labelProps,
  containerProps,
}: Props) {
  return (
    <Grid
      gridTemplateColumns={"30% 70%"}
      alignItems="center"
      placeContent={"space-between"}
      marginBlockStart={3}
      maxInlineSize={"460px"}
      {...containerProps}
    >
      <Text fontWeight={"bold"} letterSpacing="tighter" {...labelProps}>
        {labelProps.label}
      </Text>
      <Input
        defaultValue={inputProps.defaultValue}
        placeholder={inputProps.placeholder}
        disabled={!editing}
        {...inputProps}
      />
    </Grid>
  );
}
