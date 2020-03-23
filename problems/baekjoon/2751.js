const input1 = ["5", "5", "4", "3", "2", "1"];

const solution = (input1) => {
  input1.sort((a, b) => a - b);
  return [...new Set(input1)];
};

console.log(solution(input1));
