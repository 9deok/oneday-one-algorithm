/*TEST CASE1 */
const numbers = "17";

const solution = numbers => {
  let numArr = numbers.split("");

  //   return checkPrime(2);
};

// const checkPrime = number => {
//   isPrime = true;
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   return isPrime ? 1 : 0;
// };

const otherSolution = numbers => {
  let answer = 0;
  let number = numbers.split("");
  let nums = new Set();
  combination("", number);

  const combination = (a, s) => {
    if (s.length > 0) {
      if (nums.has(Number(s)) === false) {
        nums.add(Number(s));
        console.log(Number(s));
        if (chkPrime(Number(s))) answer++;
      }
    }

    if (a.length > 0) {
      for (let i = 0; i < a.length; i++) {
        let t = a.slice(0);
        t.splice(i, 1);
        combination(t, s + a[i]);
      }
    }
  };

  const chkPrime = num => {
    if (num < 2) return false;
    if (num === 2) return true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
};

console.log(solution(numbers));
console.log(otherSolution(numbers));
