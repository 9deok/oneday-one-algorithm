/*TEST CASE1 */
const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];

/*TEST CASE2 */
// const bridge_length = 100;
// const weight = 100;
// const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

const solution = (bridge_length, weight, truck_weights) => {
  let onBridge = [];
  onBridge.push(truck_weights[0]);
  let time = 0;
  let truckCount = 1;
  let timeArr = [];
  timeArr.push(0);
  while (onBridge.length !== 0) {
    time++;
    let checkWeight = onBridge.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    if (checkWeight + truck_weights[truckCount] <= 10) {
      onBridge.push(truck_weights[truckCount]);
      timeArr.push(time);
      truckCount++;
    }

    if (time - timeArr[0] == bridge_length) {
      onBridge.shift();
      timeArr.shift();
    }
  }

  return time;
};

const otherSolution = (bridge_length, weight, truck_weights) => {
  let time = 0;
  let total_truck_weight = 0;
  let bridge_queue = [],
    weight_queue = [];

  do {
    for (let i in bridge_queue) {
      bridge_queue[i]--;
    }

    if (bridge_queue[0] == 0) {
      total_truck_weight -= weight_queue.shift();
      bridge_queue.shift();
    }

    if (total_truck_weight + truck_weights[0] <= weight) {
      weight_queue.push(truck_weights[0]);
      bridge_queue.push(bridge_length);
      total_truck_weight += truck_weights.shift();
    }
    time++;
  } while (bridge_queue.length > 0);

  return time;
};

console.log(solution(bridge_length, weight, truck_weights));
console.log(otherSolution(bridge_length, weight, truck_weights));
