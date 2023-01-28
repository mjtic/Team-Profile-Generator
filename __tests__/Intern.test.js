//test code for intern (object, name, id, email, school)
const Intern = require("../lib/Intern");

test("Should create and return intern as an object", () => {
  const intern = new Intern();
  expect(typeof intern === "object").toBe(true);
});

test("Should grab name of engineer", () => {
  const intern = new Intern("Faran");
  expect(intern.getName()).toBe("Faran");
});
test("Should grab id of intern", () => {
  const intern = new Intern("Faran", 3);
  expect(intern.getId()).toBe(3);
});
test("Should grab email of intern", () => {
  const intern = new Intern("Faran", 3, "faran@fakemail");
  expect(intern.getEmail()).toBe("faran@fakemail");
});
test("Should grab school of intern", () => {
  const intern = new Intern("Faran", 3, "faran@fakemail", "bootcamp");
  expect(intern.getSchool()).toBe("bootcamp");
});
