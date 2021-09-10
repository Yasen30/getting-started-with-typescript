let money: number = 2000;
let fName: string = "md yasen rafe";
console.log(money, fName);

function add(first: number, second: number): number {
  const result = first + second;
  return result;
}

function doubleConsole(num: number): void {
  console.log(num * 2);
}
doubleConsole(5);

const output = add(45, 65);
console.log("output", output);
