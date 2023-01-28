//test code for engineer (object, name, ide, email, github)
const Engineer = require("../lib/Engineer");

test("Should create and return engineer as an object", () => {
  const engineer = new Engineer();
  expect(typeof engineer === "object").toBe(true);
});

test("Should grab name of engineer", () => {
  const engineer = new Engineer("Faran");
  expect(engineer.getName()).toBe("Faran");
});
test("Should grab id of engineer", () => {
  const engineer = new Engineer("Faran", 2);
  expect(engineer.getId()).toBe(2);
});
test("Should grab email of engineer", () => {
  const engineer = new Engineer("Faran", 2, "faran@fakemail");
  expect(engineer.getEmail()).toBe("faran@fakemail");
});
test("Should grab github of engineer", () => {
  const engineer = new Engineer("Faran", 2, "faran@fakemail", ".github/faran");
  expect(engineer.getGitHub()).toBe(".github/faran");
});
