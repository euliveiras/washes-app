import type { LoaderArgs} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Header } from "~/components/header";

export async function loader({ request }: LoaderArgs) {
    const url = new URL(request.url);
    return json({ path: url.pathname });
}

export default function () {
  const {path} = useLoaderData<typeof loader>()
    return (
        <>
            <Header label={path ??"/"} />
            <Outlet />
        </>
    );
}
