const encoder = new TextEncoder();

const data = encoder.encode('Hello Deno');

await Deno.writeFile('info.log', data);

// await Deno.writeTextFile("test.txt", "Hola deno facil!");


// import { writeFileStr } from 'https://deno.land/std@0.55.0/fs/write_file_str.ts';

// const content = await writeFileStr('info.log', 'Good Night deno');

