const Employee = require("../lib/Employee");

test("Should create and return employee as an object", () => {
  const employee = new Employee();
  expect(employee && typeof employee === "object").toBe(true);
});

describe("Employee", () => {
  describe("getName", () => {
    it("should grab employee name", () => {
      const employee = new Employee("Karen", 1, "karen@email");
      expect(employee.getName()).toBe("Karen");
    });
  });
  describe("getId", () => {
    it("should grab employee Id", () => {
    const employee = new Employee("Karen", 1, "karen@email");
    expect(employee.getId()).toBe(1)
  });
});
});

//comes back as object
//name
//id
//email
