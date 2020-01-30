/*TEST CASE1 */
const phone_number = "01094953115";

const solution = phone_number => {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
  return "*".repeat(phone_number.slice(0, -4).length) + phone_number.slice(-4);
};

const otherSolution = phone_number => {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
};

console.log(solution(phone_number));
console.log(otherSolution(phone_number));
