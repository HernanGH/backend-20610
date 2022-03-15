import { serve } from "https://deno.land/std@0.129.0/http/server.ts";

// this code works with std@0.100.0
// const s = serve({ port: 8080 });

// for await (const req of s ) {
//     req.respond({ body: 'hello deno serve'});
// }

// this code works with std@0.120.0
serve((req: Request) => {
  const url = new URL(req.url);

  console.log("Path:", url.pathname);
  console.log("Query parameters:", url.searchParams);

  return new Response("Hello World from Deno\n")
}, { port: 8080 });

console.log("http://localhost:8080/");