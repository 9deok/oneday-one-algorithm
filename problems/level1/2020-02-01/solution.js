/*TEST CASE1 */
// const x = 2;
// const n = 5;

/*TEST CASE1 */
// const x = 4;
// const n = 3;

/*TEST CASE1 */
const x = -4;
const n = 2;

const solution = (x,n) => {
    let answer = [];
    let attr = 0;
    for(let i = 0; i < n; i++){
        attr += x;
        answer.push(attr);
    }
    // console.log(Array(n).fill(x).map((a,i) => a = a * (i+1)));
    return answer;
};
  

const otherSolution = (x,n) => {
    return Array(n).fill(x).map((a,i) => a * (i+1));
}

console.log(solution(x,n));
console.log(otherSolution(x,n));
  