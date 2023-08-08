import {
  Button,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Input,
} from "@chakra-ui/react";
import type { RefObject } from "react";
import { Avatar } from "./Avatar";

type DrawerProps = {
  isOpen: boolean;
  onClose(): void;
  finalFocusRef: RefObject<HTMLElement>;
  user: {
    username: string;
  };
};

export function Drawer({ isOpen, onClose, finalFocusRef, user }: DrawerProps) {
  return (
    <ChakraDrawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton top={4} />
        <DrawerHeader
          as={HStack}
          inlineSize={"min-content"}
          paddingBlock={2}
          paddingInline={4}
        >
          <Avatar
            containerProps={{
              display: "flex",
            }}
            user={user}
          />
        </DrawerHeader>

        <DrawerBody></DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </ChakraDrawer>
  );
}
