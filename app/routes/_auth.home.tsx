import { Button, Divider, Flex, Input, Text } from "@chakra-ui/react";
import type { ActionArgs, LoaderArgs } from "@vercel/remix";
import { json, redirect } from "@vercel/remix";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useSearchParams,
  useSubmit,
} from "@remix-run/react";
import { validateSessionId } from "src/infra/http/helpers/validate-session-id";
import { findManyWashesController } from "src/infra/http/controllers/find-many-washes-controller";
import { commitSession, getSession } from "~/sessions";
import { home } from "app/components/Home";
import { washesTable } from "app/components/WashesTable";
import { LuExternalLink } from "react-icons/lu";
import type { Wash } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
import { confirmWashController } from "src/infra/http/controllers/confirm-wash-controller";
import { unconfirmWashController } from "src/infra/http/controllers/unconfirm-wash-controller";

//export const headers: HeadersFunction = ({ parentHeaders }) => {
//  const maxAge = parentHeaders.get("Cache-control") ?? `max-age=${60 * 60}`;
//
//  return {
//    "Cache-Control": maxAge,
//  };
//};

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const id = form.get("id")?.toString();
  const isCompleted = form.get("isCompleted");
  let wash, error;

  if (!id) return json({ error: "" });
  if (typeof isCompleted === "undefined") return json({ error: "" });

  if (isCompleted === "true") {
    const data = await confirmWashController({ id });
    wash = data.wash;
    error = data.error;
  } else {
    const data = await unconfirmWashController({ id });
    wash = data.wash;
    error = data.error;
  }
  if (error) {
    return json({ error: { message: error.message } });
  }

  return json({ wash });
}

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.searchParams);
  const session = await getSession(request.headers.get("Cookie"));
  const licensePlate = params.get("licensePlate") ?? undefined;
  const startDate = params.get("startDate") ?? undefined;
  const endDate = params.get("endDate") ?? undefined;
  const washStatus = params.get("status") ?? undefined;
  const cursor = params.get("cursor") ?? undefined;

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

  const dto = {
    filters: {
      createdBy: user.id,
      vehicleId: licensePlate !== "" ? licensePlate : undefined,
      startDate,
      endDate,
      status: washStatus as "ALL" | "COMPLETED" | "INCOMPLETED" | undefined,
    },
    take: 4,
    cursor: { id: cursor },
  };

  const { washes }: { washes: Partial<Wash[]> } =
    await findManyWashesController(dto);

  return json({ user, washes });
}

export default function () {
  const { user, washes } = useLoaderData() as {
    user: any;
    washes: Partial<Wash>[];
  };
  const [params] = useSearchParams();
  const actionData = useActionData() as { wash: Partial<Wash> };
  const [data, setData] = useState(washes);
  const submit = useSubmit();
  const ref = useRef<HTMLFormElement | null>(null);

  const onLastRowIntersecting = (lastElement: Element) => {
    //const form = new FormData(ref?.current ?? undefined);
    // form.set("cursor", lastElement.id);
    //  submit(form, { preventScrollReset: true, replace: true });
  };

  function onFilter() {
    const form = new FormData(ref?.current ?? undefined);
    form.delete("cursor");
    submit(form, { preventScrollReset: true, replace: true });
    setData([]);
  }

  function onLoadMore() {
    const form = new FormData(ref?.current ?? undefined);
    submit(form, { preventScrollReset: true, replace: true });
  }

  // filtros
  // actions
  useEffect(() => {
    if (actionData?.wash) {
      setData((d) => {
        const arr = d;
        const index = arr.findIndex((v) => v?.id === actionData.wash.id);
        if (index > -1) arr[index] = actionData.wash;
        return arr;
      });
    }
  }, [actionData]);

  useEffect(() => {
    setData((d) => {
      const arr = [...d];
      washes.forEach((w) => {
        const i = arr.findIndex((v) => v?.id === w?.id);
        if (i > -1) return;
        else arr.push(w);
      });
      return arr;
    });
  }, [washes]);

  return (
    <home.Container
      blockSize={"100%"}
      inlineSize="100%"
      paddingInline={[2, 2, 8]}
      position="relative"
    >
      <Text as="h1" fontSize={"4xl"}>
        Olá, {user.username}
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
          preventScrollReset
          id="filters"
          ref={ref}
          flexDir={["column", "column", "row"]}
          gap={4}
          align="center"
          justify={"space-evenly"}
          inlineSize="100%"
        >
          <Input
            type="hidden"
            readOnly
            name="cursor"
            value={data[data.length - 1]?.id}
          />
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
          <Flex gap={4}>
            <Button
              minInlineSize={"160px"}
              colorScheme={"gray"}
              borderRadius={"lg"}
              onClick={() => ref.current?.reset()}
            >
              limpar campos
            </Button>
            <Button
              minInlineSize={"160px"}
              variant="solid"
              colorScheme={"blue"}
              borderRadius={"lg"}
              onClick={onFilter}
            >
              filtrar
            </Button>
          </Flex>
        </Flex>
        <Divider />
        <Flex justify={"space-between"} align="center" inlineSize="90%">
          {washes && (
            <Text fontWeight={"semibold"} color="gray.400" fontSize="sm">
              {data.length > 0
                ? `showing ${data.length} results`
                : "nenhuma lavagem foi encontrada"}
            </Text>
          )}
          <Button
            as={Link}
            reloadDocument
            to={`/csv?${params}`}
            variant="outline"
            borderRadius={"full"}
            rightIcon={<LuExternalLink />}
            value="EXPORT"
          >
            baixar
          </Button>
        </Flex>
      </Flex>
      <washesTable.Table
        containerProps={{ marginBlock: 4, marginBlockEnd: 8 }}
        tableProps={{ variant: "striped" }}
      >
        <washesTable.Head>
          <washesTable.Row>
            <washesTable.headData.LicensePlate />
            <washesTable.headData.ScheduledDate />
            <washesTable.headData.Status />
            <washesTable.headData.Note />
            <washesTable.headData.Actions />
          </washesTable.Row>
        </washesTable.Head>

        <washesTable.Body onIntersecting={onLastRowIntersecting}>
          {data?.map((w, i, arr) => {
            return (
              <washesTable.Row
                key={w?.id}
                id={w?.id}
              >
                <washesTable.bodyData.LicensePlate
                  licensePlate={w.vehicleId ?? ""}
                />
                <washesTable.bodyData.ScheduledDate
                  scheduledDate={w?.scheduleDate ?? ""}
                />
                <washesTable.bodyData.Status
                  status={w?.isCompleted === true ? "success" : "error"}
                  label={w?.isCompleted === true ? "Confirmado" : "Atrasada"}
                />
                <washesTable.bodyData.Note note={w?.note ?? ""} />
                <washesTable.bodyData.Actions
                  isCompleted={w?.isCompleted}
                  id={w?.id}
                />
              </washesTable.Row>
            );
          })}
        </washesTable.Body>
      </washesTable.Table>
      <Flex inlineSize={"100%"} justify="center" paddingBlockEnd={8}>
        <Button variant={"solid"} colorScheme="blue" onClick={onLoadMore}>
          Carregar mais
        </Button>
      </Flex>
    </home.Container>
  );
}
