import {
  Box,
  Text,
  Grid,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import { redirect, json } from "@vercel/remix";
import type { ActionArgs,LoaderArgs } from "@vercel/remix";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { signInUserController } from "src/infra/http/controllers/sign-in-user-controller";
import { validateSessionId } from "src/infra/http/helpers/validate-session-id";
import { Footer } from "~/components/Footer";
import { getSession, commitSession } from "~/sessions";

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");

  const session = await getSession(request.headers.get("Cookie"));

  if (typeof password !== "string" || typeof email !== "string") {
    return new Response(JSON.stringify({ error: "credentials is invalid" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const { error, sessionId } = await signInUserController({ email, password });

  if (error || !sessionId) {
    return new Response(JSON.stringify({ error }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  session.set("token", sessionId);

  return redirect("/home", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  const token = session.get("token");

  if (!token) {
    // Redirect to the home page if they are already signed in.
    return json({});
  }

  const { user } = await validateSessionId({ sessionId: token });

  if (user) {
    return redirect("/home");
  }

  return json({});
}

type CustomInputGroupProps = {
  icon: React.ReactNode;
  name: string;
  type: string;
  isSubmitting: boolean;
  isIdle: boolean;
  isError: boolean;
};

function CustomInputGroup({
  icon,
  name,
  type,
  isError,
  isIdle,
  isSubmitting,
}: CustomInputGroupProps) {
  return (
    <InputGroup
      sx={{
        "--clr": isError
          ? "#E53E3E"
          : isSubmitting
          ? "#48BB78"
          : isIdle
          ? "#000000"
          : "#3182ce",
      }}
    >
      <InputRightElement fontSize={26}>{icon}</InputRightElement>
      <Input
        _focusVisible={{
          borderColor: "var(--clr)",
          boxShadow: "0 0 0 1px var(--clr)",
        }}
        type={type}
        border={"2px"}
        borderColor={"var(--clr)"}
        borderRadius={"xl"}
        name={name}
      />
    </InputGroup>
  );
}

export default function () {
  const errors = useActionData<typeof action>();
  const navigation = useNavigation();

  return (
    <Box h="100dvh" w="100%">
      <Grid h="100%" w="100%" templateRows="1fr auto">
        <VStack paddingBlockStart={[32, 20]}>
          <HStack spacing={"4px"}>
            <BsPerson size="20px" color="#000000" strokeWidth={"0.8px"} />
            <Text fontWeight={"bold"} fontSize={"md"}>
              / login
            </Text>
          </HStack>
          <VStack
            as={Form}
            spacing={6}
            border={"1px"}
            borderColor={"blackAlpha.100"}
            borderRadius={"sm"}
            boxShadow={"dark-lg"}
            minBlockSize={96}
            maxInlineSize={[72, "none"]}
            padding={8}
            method="POST"
          >
            <FormControl isRequired>
              <FormLabel fontSize={"sm"}>email</FormLabel>
              <CustomInputGroup
                icon={<MdOutlineEmail color={"var(--clr)"} />}
                name="email"
                type="email"
                isError={errors?.error}
                isSubmitting={navigation.state === "submitting"}
                isIdle={navigation.state === "idle"}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize={"sm"}>password</FormLabel>
              <CustomInputGroup
                icon={<MdLockOutline color={"var(--clr)"} />}
                type="password"
                name="password"
                isError={errors?.error}
                isSubmitting={navigation.state === "submitting"}
                isIdle={navigation.state === "idle"}
              />
            </FormControl>
            {errors?.error && <Text color="red.500">{errors?.error}</Text>}
            <Button
              marginBlockStart={4}
              colorScheme="blue"
              variant={"solid"}
              paddingInline={12}
              borderRadius="full"
              size="md"
              type="submit"
            >
              Entrar
            </Button>
          </VStack>
        </VStack>
        <Footer />
      </Grid>
    </Box>
  );
}
