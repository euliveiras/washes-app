import {
  Button,
  Divider,
  Grid,
  HStack,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineNotificationsNone, MdDensityMedium } from "react-icons/md";
import { LuPlus } from "react-icons/lu";
import { Link } from "@remix-run/react";
import { useRef } from "react";
import { SearchInput } from "./SearchInput";
import { Drawer } from "./Drawer";
import { Avatar } from "./Avatar";

type HeaderProps = {
  label: string;
  user: {
    username: string;
  };
};
export function Header({ label, user }: HeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Grid
      maxH={"120px"}
      inlineSize={"100%"}
      gridAutoFlow={"column"}
      gridAutoRows={"min-content"}
      gridAutoColumns="1fr"
      paddingBlock={4}
      paddingInline={1}
    >
      <HStack spacing={[6]}>
        <HStack spacing={1}>
          <IconButton
            variant="ghost"
            aria-label="go to home"
            fontSize="32px"
            isRound
            icon={<BiHomeAlt size={30} />}
            as={Link}
            to={"/home"}
          />
          <Text letterSpacing={"wider"} fontWeight={"bold"} fontSize={"md"}>
            {label}
          </Text>
        </HStack>
        <SearchInput inputProps={{ isDisabled: true }} />
      </HStack>
      <HStack justifySelf={"flex-end"} spacing={1}>
        <Button
          as={Link}
          marginInline={1}
          variant={"solid"}
          colorScheme="blue"
          borderRadius={"full"}
          blockSize={10}
          inlineSize={[10, "auto"]}
          sx={{ span: { marginInlineEnd: ["0"] } }}
          leftIcon={<LuPlus size={"1.25em"} />}
          // onClick={onNewWashModalOpen}
          to={"/new-wash"}
          // ref={newWashModalRef}
        >
          <Text display={["none", "block"]}>Nova lavagem</Text>
        </Button>
        <IconButton
          variant="ghost"
          colorScheme="blackAlpha"
          aria-label="open notifications"
          fontSize="26px"
          isRound
          icon={<MdOutlineNotificationsNone />}
        />
        <Divider borderLeftWidth={2} orientation="vertical" />
        <Avatar user={user} />
        <IconButton
          display={["flex", "flex", "none"]}
          variant="ghost"
          aria-label="open side menu"
          fontSize="24px"
          icon={<MdDensityMedium />}
          onClick={onOpen}
          ref={btnRef}
        />
        <Drawer
          finalFocusRef={btnRef}
          isOpen={isOpen}
          onClose={onClose}
          user={user}
        />
      </HStack>
    </Grid>
  );
}
