// const file = await Deno.open('info.log', { read: true });

// await Deno.copy(file, Deno.stdout);

// file.close();


// import { readFileStr } from 'https://deno.land/std@0.55.0/fs/read_file_str.ts';

// const file = await readFileStr('info.log');

// console.log(file);

const text = await Deno.readTextFile("test.txt");
console.log(text)

