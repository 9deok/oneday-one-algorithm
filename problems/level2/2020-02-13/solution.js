/*TEST CASE1 */
const priorities = [2, 1, 3, 2];
const location = 2;

/*TEST CASE2 */
// const priorities = [1, 1, 9, 1, 1, 1];
// const location = 0;

const solution = (priorities, location) => {
  let answer = 0;
  let max = Math.max.apply(null, priorities);
  let firstPrint = priorities.indexOf(max);
  //   console.log(`firstPrint = ${firstPrint}   location = ${location}`);

  let order1 = priorities.slice(firstPrint, priorities.length);
  let order2 = priorities.slice(0, firstPrint);
  let order = [...order1, ...order2];
  //   console.log(order);
  if (location == firstPrint) {
    answer = 1;
  } else if (location > firstPrint) {
    answer = location - firstPrint;
  } else {
    answer = priorities.length - firstPrint + location + 1;
  }
  return answer;
};

const otherSolution = (priorities, location) => {
  let arr = priorities.map((priority, index) => {
    return {
      index: index,
      priority: priority
    };
  });
  // console.log(arr);
  let queue = [];
  // console.log(arr.shift());
  // console.log(arr);
  // console.log(arr.shift());
  // console.log(arr.shift());
  // console.log(arr.shift());
  // return arr.shift();
  // return;
  while (arr.length > 0) {
    let firstEle = arr.shift();

    let hasHighPriority = arr.some(ele => {
      return ele.priority > firstEle.priority;
    });
    if (hasHighPriority) {
      arr.push(firstEle);
    } else {
      queue.push(firstEle);
    }
    // console.log(arr);
  }
  return queue.findIndex(queueEle => queueEle.index === location) + 1;
};

console.log(solution(priorities, location));
console.log(otherSolution(priorities, location));
