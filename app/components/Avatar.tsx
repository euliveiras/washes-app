import {
  HStack,
  Avatar as ChakraAvatar,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { RxChevronDown } from "react-icons/rx";
import type { ChakraProps, AvatarProps, TextProps } from "@chakra-ui/react";

type ComponentProps = {
  avatarProps?: AvatarProps;
  containerProps?: ChakraProps;
  user: {
    username: string;
  };
};

export function Avatar({ containerProps, avatarProps, user }: ComponentProps) {
  return (
    <HStack
      paddingInline={2}
      display={["none", "none", "flex"]}
      {...containerProps}
    >
      {user && (
        <Menu>
          <MenuButton as={Button} variant="ghost" rightIcon={<RxChevronDown />}>
            {user.username}
          </MenuButton>
          <MenuList>
            <MenuItem>Configurações</MenuItem>
            <MenuItem as={Text} color="red.400">Sair</MenuItem>
          </MenuList>
        </Menu>
      )}
      <ChakraAvatar size="md" name="Natan" {...avatarProps} />
    </HStack>
  );
}
