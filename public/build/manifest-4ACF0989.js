window.__remixManifest={"version":"4acf0989","entry":{"module":"http://localhost:3001/build/entry.client-QMZKCUPP.js","imports":["http://localhost:3001/build/_shared/chunk-EYPFEEA2.js","http://localhost:3001/build/_shared/chunk-DC5KBJVF.js","http://localhost:3001/build/_shared/chunk-PKOMFC7F.js","http://localhost:3001/build/_shared/chunk-ANXL52AQ.js","http://localhost:3001/build/_shared/chunk-6SJDMTBK.js","http://localhost:3001/build/_shared/chunk-OKS54H4S.js","http://localhost:3001/build/_shared/chunk-3YOGVSK4.js","http://localhost:3001/build/_shared/chunk-KFR6H6JJ.js","http://localhost:3001/build/_shared/chunk-I54TBTTL.js","http://localhost:3001/build/_shared/chunk-CT6324V4.js"]},"routes":{"root":{"id":"root","path":"","module":"http://localhost:3001/build/root-6QS4OETA.js","imports":["http://localhost:3001/build/_shared/chunk-DLDEEFXR.js"],"hasAction":false,"hasLoader":false,"hasCatchBoundary":false,"hasErrorBoundary":false},"routes/$":{"id":"routes/$","parentId":"root","path":"*","module":"http://localhost:3001/build/routes/$-EXLJR26F.js","hasAction":false,"hasLoader":false,"hasCatchBoundary":false,"hasErrorBoundary":false},"routes/_auth":{"id":"routes/_auth","parentId":"root","module":"http://localhost:3001/build/routes/_auth-WMRE4PIX.js","imports":["http://localhost:3001/build/_shared/chunk-DXSXC535.js"],"hasAction":false,"hasLoader":true,"hasCatchBoundary":false,"hasErrorBoundary":false},"routes/_auth.home":{"id":"routes/_auth.home","parentId":"routes/_auth","path":"home","module":"http://localhost:3001/build/routes/_auth.home-JVENGV5S.js","imports":["http://localhost:3001/build/_shared/chunk-DLDEEFXR.js"],"hasAction":false,"hasLoader":true,"hasCatchBoundary":false,"hasErrorBoundary":false},"routes/_index":{"id":"routes/_index","parentId":"root","index":true,"module":"http://localhost:3001/build/routes/_index-M23M7LSB.js","hasAction":false,"hasLoader":true,"hasCatchBoundary":false,"hasErrorBoundary":false},"routes/sign-in":{"id":"routes/sign-in","parentId":"root","path":"sign-in","module":"http://localhost:3001/build/routes/sign-in-RY6DPFYR.js","imports":["http://localhost:3001/build/_shared/chunk-DXSXC535.js"],"hasAction":true,"hasLoader":true,"hasCatchBoundary":false,"hasErrorBoundary":false},"routes/sign-up":{"id":"routes/sign-up","parentId":"root","path":"sign-up","module":"http://localhost:3001/build/routes/sign-up-P2IFJXMP.js","hasAction":true,"hasLoader":false,"hasCatchBoundary":false,"hasErrorBoundary":false},"routes/vehicle-search":{"id":"routes/vehicle-search","parentId":"root","path":"vehicle-search","module":"http://localhost:3001/build/routes/vehicle-search-QWXIDT3P.js","hasAction":false,"hasLoader":true,"hasCatchBoundary":false,"hasErrorBoundary":false},"routes/washes-search":{"id":"routes/washes-search","parentId":"root","path":"washes-search","module":"http://localhost:3001/build/routes/washes-search-HHKPA76Z.js","hasAction":false,"hasLoader":true,"hasCatchBoundary":false,"hasErrorBoundary":false}},"hmr":{"runtime":"http://localhost:3001/build/_shared/chunk-KFR6H6JJ.js","routes":{"app/routes/_auth.tsx":{"loaderHash":"export async function loader({\n  request\n}: LoaderArgs) {\n  const session = await getSession(request.headers.get(\"Cookie\"));\n  const url = new URL(request.url);\n  const token = session.get(\"token\");\n  if (!token) {\n    throw redirect(\"/sign-in\");\n  }\n  const {\n    error,\n    user\n  } = await validateSessionId({\n    sessionId: token\n  });\n  if (error || !user) {\n    session.unset(\"token\");\n    throw redirect(\"/sign-in\", {\n      headers: {\n        \"Set-Cookie\": await commitSession(session)\n      }\n    });\n  }\n  return json({\n    path: url.pathname,\n    user\n  }, {\n    headers: {\n      \"Cache-Control\": `max-age=${60 * 60}`\n    }\n  });\n}"},"app/routes/washes-search/route.ts":{"loaderHash":"export async function loader({\n  request\n}: LoaderArgs) {\n  const url = new URL(request.url);\n  const query = url.searchParams.get(\"query\");\n  if (typeof query !== \"string\" || query == \"\") return json(null);\n  const {\n    error,\n    washCycle,\n    washes\n  } = await getNextWashesAndCycle(query);\n  if (error) return json({\n    error\n  });\n  return json({\n    washCycle,\n    washes\n  });\n}"},"app/routes/_auth.home.tsx":{"loaderHash":"export async function loader({\n  request\n}: LoaderArgs) {\n  const session = await getSession(request.headers.get(\"Cookie\"));\n  const token = session.get(\"token\");\n  console.log(\"home loader\");\n  if (!token) {\n    throw redirect(\"/sign-in\");\n  }\n  const {\n    error,\n    user\n  } = await validateSessionId({\n    sessionId: token\n  });\n  if (error || !user) {\n    session.unset(\"token\");\n    throw redirect(\"/sign-in\", {\n      headers: {\n        \"Set-Cookie\": await commitSession(session)\n      }\n    });\n  }\n  return json({\n    user\n  });\n}"},"app/routes/sign-in.tsx":{"loaderHash":"export async function loader({\n  request\n}: LoaderArgs) {\n  const session = await getSession(request.headers.get(\"Cookie\"));\n  const token = session.get(\"token\");\n  if (!token) {\n    // Redirect to the home page if they are already signed in.\n    return json({});\n  }\n  const {\n    user\n  } = await validateSessionId({\n    sessionId: token\n  });\n  if (user) {\n    return redirect(\"/home\");\n  }\n  return json({});\n}"},"app/routes/_index.tsx":{"loaderHash":"export async function loader() {\n  return redirect(\"/home\");\n}"},"app/routes/vehicle-search/route.ts":{"loaderHash":"export async function loader({\n  request\n}: LoaderArgs) {\n  const url = new URL(request.url);\n  const query = url.searchParams.get(\"query\");\n  if (typeof query !== \"string\" || query == \"\") return json(null);\n  return json(vehicles.filter(v => v.licensePlate === query));\n}"}},"timestamp":1691512660375},"url":"http://localhost:3001/build/manifest-4ACF0989.js"};