/*TEST CASE1 */
// const d = [1,3,2,5,4];
// const budget = 9;

/*TEST CASE2 */
const d = [10,15,3,33,2,5,7];
const budget = 3;

const solution = (d,budget) => {
    d.sort((a,b) => a-b);
    console.log(d);
    return d.reduce((acc,cur) => {
        budget = budget - cur;
        if(budget >= 0) acc++;
        return acc;
    },0);    
};
  
console.log(solution(d,budget));  