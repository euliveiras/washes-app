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

export default function () {
  const data = useActionData<typeof action>();

  return (
    <Box h="100dvh" w="100%">
      <Grid h="100%" w="100%" templateRows="1fr auto">
        <VStack paddingBlockStart={20}>
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
            padding={8}
            method="POST"
          >
            <FormControl isRequired>
              <FormLabel fontSize={"sm"}>email</FormLabel>
              <InputGroup sx={{ "--clr": data?.error ? "#E53E3E" : "#3182ce" }}>
                <InputRightElement fontSize={26}>
                  <MdOutlineEmail color={data?.error && "var(--clr)"} />
                </InputRightElement>
                <Input
                  _focusVisible={{
                    borderColor: "var(--clr)",
                    boxShadow: "0 0 0 1px var(--clr)",
                  }}
                  type="email"
                  border={"2px"}
                  borderColor={data?.error && "var(--clr)"}
                  borderRadius={"xl"}
                  name="email"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize={"sm"}>password</FormLabel>
              <InputGroup sx={{ "--clr": data?.error ? "#E53E3E" : "#3182ce" }}>
                <InputRightElement fontSize={26}>
                  <MdLockOutline color={data?.error && "var(--clr)"} />
                </InputRightElement>
                <Input
                  _focusVisible={{
                    borderColor: "var(--clr)",
                    boxShadow: "0 0 0 1px var(--clr)",
                  }}
                  border={"2px"}
                  borderColor={data?.error && "var(--clr)"}
                  borderRadius={"xl"}
                  name="password"
                />
              </InputGroup>
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
