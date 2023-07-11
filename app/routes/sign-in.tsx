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
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import type { LoaderArgs } from "@remix-run/node";
import { BsPerson } from "react-icons/bs";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import { redirect, type ActionArgs, json } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import { signInUserController } from "src/infra/http/controllers/sign-in-user-controller";
import { validateSessionId } from "src/infra/http/helpers/validate-session-id";
import { Footer } from "~/components/footer";
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
  inputName: string;
  inputType: string;
  isError: boolean;
};

function CustomInputGroup({
  icon,
  inputName,
  inputType,
  isError,
}: CustomInputGroupProps) {
  return (
    <InputGroup sx={{ "--clr": isError ? "#E53E3E" : "#3182ce" }}>
      <InputRightElement fontSize={26}>{icon}</InputRightElement>
      <Input
        _focusVisible={{
          borderColor: "var(--clr)",
          boxShadow: "0 0 0 1px var(--clr)",
        }}
        type={inputType}
        border={"2px"}
        borderColor={isError ? "var(--clr)" : ""}
        borderRadius={"xl"}
        name={inputName}
      />
    </InputGroup>
  );
}

export default function () {
  const data = useActionData<typeof action>();

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
                icon={<MdOutlineEmail color={data?.error && "var(--clr)"} />}
                inputName="email"
                inputType="email"
                isError={data?.error}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize={"sm"}>password</FormLabel>
              <CustomInputGroup
                icon={<MdLockOutline color={data?.error && "var(--clr)"} />}
                inputType="password"
                inputName="password"
                isError={data?.error}
              />
            </FormControl>
            {data?.error && <Text color="red.500">{data?.error}</Text>}
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
