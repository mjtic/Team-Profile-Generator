const Employee = require("../lib/Employee");


describe("Employee", () => {
  test("Should create employee object", () => {
    const employee = new Employee("Rebecca", 2, "Re-Gi@email.com");
    expect(employee.name).toBe(expect.any(String));
    expect(employee.id).toBe
  });
});





//comes back as object
//name
//id
//email
