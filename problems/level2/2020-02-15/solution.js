/*TEST CASE1 */
const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

const solution = (progresses, speeds) => {
  let time = progresses.map((a, i) => Math.ceil((100 - a) / speeds[i]));
  let answer = time.map((a, i, arr) => {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > a) break;
    }
  });

  //   return time;
};

const otherSolution = (progresses, speeds) => {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
};

console.log(solution(progresses, speeds));
console.log(otherSolution(progresses, speeds));
