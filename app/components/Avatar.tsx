import { HStack, Avatar as ChakraAvatar, Text } from "@chakra-ui/react";
import type { ChakraProps, AvatarProps, TextProps } from "@chakra-ui/react";

type ComponentProps = {
  avatarProps?: AvatarProps;
  textProps?: TextProps;
  containerProps?: ChakraProps;
  user: {
    username: string;
  };
};
export function Avatar({
  containerProps,
  textProps,
  avatarProps,
  user,
}: ComponentProps) {
  return (
    <HStack
      paddingInline={2}
      display={["none", "none", "flex"]}
      {...containerProps}
    >
      <ChakraAvatar size="md" name="Natan" {...avatarProps} />
      {user && (
        <Text fontWeight={"bold"} {...textProps}>
          {user.username}
        </Text>
      )}
    </HStack>
  );
}
