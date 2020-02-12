/*TEST CASE1 */
const skill = "CBD";
const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

const solution = (skill, skill_trees) => {
  let skillIndex = skill.split("");
  return skill_trees.reduce((acc, cur) => {
    let skillCheck = skillIndex.map(a => cur.indexOf(a));
    let indexCheck = skillCheck.map(a => {
      if (a === -1) a = 27;
      return a;
    });
    let compareSkill1 = indexCheck.join("");
    indexCheck.sort((a, b) => a - b);
    let compareSkill2 = indexCheck.join("");

    if (Object.is(compareSkill1, compareSkill2)) {
      acc = acc + 1;
    }
    return acc;
  }, 0);
};

const otherSolution = (skill, skill_trees) => {
  let regex = new RegExp(`[^${skill}]`, "g");
  return skill_trees
    .map(a => a.replace(regex, ""))
    .filter(a => skill.indexOf(a) === 0 || a === "").length;
};

console.log(solution(skill, skill_trees));
console.log(otherSolution(skill, skill_trees));
console.log("============");
