/*TEST CASE1 */
// const s = "AB";
// const n = 1;

/*TEST CASE2 */
const s = "z";
const n = 1;

/*TEST CASE3 */
// const s = "a B z";
// const n = 4;

const solution = (s, n) => {
  const map = Array.prototype.map;
  let result = map.call(s, function(x) {
    let ascii = x.charCodeAt(0);
    for (let i = 0; i < n; i++) {
      if (ascii >= 65 && ascii < 90) {
        ascii = ascii + 1;
      } else if (ascii >= 97 && ascii < 122) {
        ascii = ascii + 1;
      } else if (ascii == 90 || ascii == 122) {
        ascii = ascii - 25;
      }
    }
    return String.fromCharCode(ascii);
  });
  return result;
};

console.log(solution(s, n));
