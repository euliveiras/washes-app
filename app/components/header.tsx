import {
    Avatar,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Grid,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import {
    MdOutlineSearch,
    MdOutlineNotificationsNone,
    MdOutlineHome,
    MdDensityMedium,
} from "react-icons/md";
import { LuPlus } from "react-icons/lu";
import { Link } from "@remix-run/react";
import { useRef } from "react";

type HeaderProps = {
    label: string;
};
export function Header({ label }: HeaderProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);

    return (
        <Grid
            outline="1px solid pink"
            maxH={"120px"}
            inlineSize={"100%"}
            gridAutoFlow={"column"}
            gridAutoRows={"min-content"}
            paddingInline={2}
            paddingBlock={1}>
            <HStack>
                <HStack spacing={1}>
                    <IconButton
                        variant="ghost"
                        aria-label="go to home"
                        fontSize="32px"
                        isRound
                        icon={<MdOutlineHome />}
                        as={Link}
                        to={"/home"}
                    />
                    <Text fontWeight={"bold"} fontSize={"md"}>
                        {label}
                    </Text>
                </HStack>
                <InputGroup display={["none", "block"]}>
                    <InputRightElement fontSize={26}>
                        <MdOutlineSearch />
                    </InputRightElement>
                    <Input type="search" name="query" />
                </InputGroup>
            </HStack>
            <HStack justifySelf={"flex-end"} spacing={0}>
                <IconButton
                    variant="ghost"
                    colorScheme="blackAlpha"
                    aria-label="open notifications"
                    fontSize="26px"
                    isRound
                    icon={<MdOutlineNotificationsNone />}
                />
                <Button
                    marginInline={1}
                    variant={"solid"}
                    colorScheme="blue"
                    borderRadius={"full"}
                    blockSize={10}
                    inlineSize={[10, "auto"]}
                    sx={{ span: { marginInlineEnd: ["0"] } }}
                    leftIcon={<LuPlus size={"1.25em"} />}>
                    <Text display={["none", "block"]}>Nova lavagem</Text>
                </Button>
                <HStack display={["none", "none", "block"]}>
                    <Avatar size="sm" name="Natan" />
                    <Text>Natan</Text>
                </HStack>
                <IconButton
                display={["flex", "flex", "none"]}
                    variant="ghost"
                    aria-label="open side menu"
                    fontSize="24px"
                    icon={<MdDensityMedium />}
                    onClick={onOpen}
                    ref={btnRef}
                />
            </HStack>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton top={4}/>
                    <DrawerHeader as={HStack} inlineSize={"min-content"} paddingBlock={2} paddingInline={4}>
                        <Avatar size="md" name="Natan" />
                        <Text>Natan</Text>
                    </DrawerHeader>

                    <DrawerBody>
                        <Input placeholder="Type here..." />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue">Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Grid>
    );
}
