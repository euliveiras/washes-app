import { Button, Divider, Flex, Grid, Text } from "@chakra-ui/react";
import type { HeadersFunction, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { validateSessionId } from "src/infra/http/helpers/validate-session-id";
import { commitSession, getSession } from "~/sessions";
import { home } from "app/components/Home";
import { washesTable } from "app/components/WashesTable";
import { LuExternalLink } from "react-icons/lu";

export const headers: HeadersFunction = ({ parentHeaders }) => {
  const maxAge = parentHeaders.get("Cache-control") ?? `max-age=${60 * 60}`;

  return {
    "Cache-Control": maxAge,
  };
};

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  const token = session.get("token");

  if (!token) {
    throw redirect("/sign-in");
  }

  const { error, user } = await validateSessionId({ sessionId: token });

  if (error || !user) {
    session.unset("token");
    throw redirect("/sign-in", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return json({ user });
}

export default function () {
  const data = useLoaderData<typeof loader>();
  return (
    <home.Container
      blockSize={"100%"}
      inlineSize="100%"
      paddingInline={[2, 2, 8]}
    >
      <Text as="h1" fontSize={"4xl"}>
        Olá, {data.user.username}
      </Text>
      <Flex
        flexDir={["column"]}
        align="center"
        paddingBlock={6}
        gap={6}
        inlineSize="100%"
      >
        <Flex
          as={Form}
          flexDir={["column", "column", "row"]}
          gap={4}
          align="center"
          justify={"space-evenly"}
          inlineSize="100%"
        >
          <washesTable.filters.Search />
          <Flex gap={[2, 2, 6]} align="center">
            <washesTable.filters.Date name="startDate" size="sm" />
            <Text>até</Text>
            <washesTable.filters.Date name="endDate" size="sm" />
          </Flex>
          <washesTable.filters.Status
            name="status"
            inlineSize={"fit-content"}
          />
          <Button
            minInlineSize={"160px"}
            variant="solid"
            colorScheme={"blue"}
            borderRadius={"lg"}
            type="submit"
          >
            filtrar
          </Button>
        </Flex>
        <Divider />
        <Flex justify={"space-between"} align="center" inlineSize="90%">
          {true && (
            <Text fontWeight={"semibold"} color="gray.400" fontSize="sm">
              {true ? "showing 3 results" : "nenhuma lavagen foi encontrada"}
            </Text>
          )}
          <Button rightIcon={<LuExternalLink />} value="EXPORT" type="submit">
            baixar
          </Button>
        </Flex>
      </Flex>
      <washesTable.Table containerProps={{ marginBlockStart: 4 }}>
        <washesTable.Head>
          <washesTable.Row>
            <washesTable.headData.LicensePlate />
            <washesTable.headData.ScheduledDate />
            <washesTable.headData.Status />
            <washesTable.headData.Driver />
            <washesTable.headData.Note />
            <washesTable.headData.Actions />
          </washesTable.Row>
        </washesTable.Head>

        <washesTable.Body>
          <washesTable.Row>
            <washesTable.bodyData.LicensePlate licensePlate="asdasdasda" />
            <washesTable.bodyData.ScheduledDate scheduledDate={new Date()} />
            <washesTable.bodyData.Status status="success" label="Confirmado" />
            <washesTable.bodyData.Driver driver="Matheus" />
            <washesTable.bodyData.Note note="Lavar a caçamba" />
            <washesTable.bodyData.Actions />
          </washesTable.Row>
        </washesTable.Body>
      </washesTable.Table>
    </home.Container>
  );
}
