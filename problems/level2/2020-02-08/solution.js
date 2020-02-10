/*TEST CASE1 */
const n = 6;

/*TEST CASE1 */
// const n = 2;

/*TEST CASE1 */
// const n = 3;

/*TEST CASE1 */
// const n = 4;

/**
 * 11 : 42
 * 12 : 44
 * 13 : 111
 * 14 : 112
 * 15 : 114
 * 16 : 121
 * 17 : 122
 * 18 : 124
 * 19 : 141
 * 20 : 142
 * 21 : 144
 * 22 : 211
 * 23 : 212
 * 24 : 214
 * 25 : 221
 * 26 : 222
 * 27 : 224
 * 28 : 241
 * 29 : 242
 * 30 : 244
 * 31 : 411
 * 32 : 412
 * 33 : 414
 * 34 : 421
 * 35 : 422
 * 36 : 424
 * 37 : 441
 * 38 : 442
 * 39 : 444
 * 40 : 1111
 *
 *
 */

const solution = n => {
  console.log(`n-1 = ${n - 1}`);
  console.log(`n-1/3 = ${(n - 1) / 3}`);
  console.log(`n-1%3 = ${(n - 1) % 3}`);
  console.log(`[1,2,4] = ${[1, 2, 4]}`);
  console.log(`[1,2,4][(n-1) % 3] = ${[1, 2, 4][(n - 1) % 3]}`);
  return;
};

const otherSolution = n => {
  console.log("haha" + parseInt((n - 1) / 3));
  console.log("answer" + parseInt((n - 1) % 3));
  return n === 0
    ? ""
    : otherSolution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
};

// console.log(solution(n));
console.log(otherSolution(n));
