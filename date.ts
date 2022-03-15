import { parse } from "https://deno.land/std@0.129.0/datetime/mod.ts";

const myDate = parse("06-05-2022", "dd-MM-yyyy");

console.log(myDate)