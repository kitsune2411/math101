/**
 * Finds the first 'howMuch' common multiples of 'num1' and 'num2'.
 * @param num1 The first number.
 * @param num2 The second number.
 * @param howMuch The number of common multiples to find.
 * @returns An array containing the first 'howMuch' common multiples.
 */
function findCommonMultiples(num1: number, num2: number, howMuch: number) {
  let result: number[] = [];

  let temp1: number[] = [];
  let temp2: number[] = [];

  for (let index = 1; result.length < howMuch; index++) {
    let res1 = num1 * index;
    let res2 = num2 * index;

    temp1.push(res1);
    temp2.push(res2);

    if (temp1.includes(res2) || temp2.includes(res1)) {
      result.push(res1);
    }
    
  }

  return result;
}


const a = 8
const b = 10
const c = 1
const result = findCommonMultiples(a, b, c)
const areis = c > 1 ? "are" : "is"
console.log("bil 1 : ", a);
console.log("bil 2 : ", b);
console.log(`the first ${c} commond factor ${areis} ${result.join(', ')}`);
