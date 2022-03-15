import { serve } from "https://deno.land/std@0.129.0/http/server.ts";

serve((req: Request) => {
  const url = new URL(req.url);

  return new Response("<h1>Hello World from Deno</h1><h4>Description</h4>",{
    status: 200,
    headers: new Headers({ 'content-type': 'text/html' }),
  })
}, { port: 8080 });

console.log("http://localhost:8080/");