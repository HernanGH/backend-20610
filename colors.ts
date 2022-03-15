import {
    bold, bgYellow, bgBlack, red, green 
} from 'https://deno.land/std/fmt/colors.ts';

console.log(bgYellow(bold(red('Hello deno'))));
console.log(bgBlack(bold(green('Hello deno'))));