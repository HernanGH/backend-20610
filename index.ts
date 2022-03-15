/**
 * 
 * @param name name to say hello
 * @returns hello + name
 */
const sayHello = (name: string): string => {
    return `Hello ${name}`;
};

console.log(sayHello('world'));