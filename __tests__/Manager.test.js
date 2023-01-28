const Manager = require("../lib/manager");

test("Should create and return manager as an object", () => {
  const manager = new Manager();
  expect(typeof manager === "object").toBe(true);
});

test("Should grab name of engineer", () => {
  const manager = new Manager("Faran");
  expect(manager.getName()).toBe("Faran");
});
test("Should grab id of manager", () => {
  const manager = new Manager("Faran", 3);
  expect(manager.getId()).toBe(3);
});
test("Should grab email of manager", () => {
    const manager = new Manager("Faran", 3, "faran@fakemail");
    expect(manager.getEmail()).toBe("faran@fakemail");
  });
  test("Should grab office number of manager", () => {
    const manager = new Manager("Faran", 3, "faran@fakemail", 1);
    expect(manager.getOfficeNumber()).toBe(1);
  });
  