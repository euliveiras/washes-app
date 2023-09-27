import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { findWashByIdController } from "src/infra/http/controllers/find-unique-wash-controller";

export async function loader({ params }: LoaderArgs) {
  if (!params.id)
    return json(
      {
        error: true,
        message: "Id da lavagem nos parâmetros de rota é indefinido",
      },
      400,
    );
  const { wash, error } = await findWashByIdController({ id: params.id });

  if (error) throw json({ error }, 400);

  return json({ wash });
}

export default function () {
  const data = useLoaderData<typeof loader>();
  console.log(data);
  return <h1>hello</h1>;
}
