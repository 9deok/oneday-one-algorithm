/*TEST CASE1 */
const n = 20; //41

/*TEST CASE2 */
// const n = 2;

/*TEST CASE3 */
// const n = 3;

/*TEST CASE4 */
// const n = 4;

const solution = n => {
  // n -= 1;
  // let numberPlace = 1;
  // while (n > 0) {
  //   n -= Math.pow(3, numberPlace);
  //   // console.log(` n == ${n}`);
  //   if (n >= 0) numberPlace++;
  // }

  // return numberPlace;
  return n === 0
    ? ""
    : solution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
};

// const otherSolution = n => {
//   return n === 0
//     ? ""
//     : otherSolution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
// };

console.log(solution(n));
// console.log(otherSolution(n));
