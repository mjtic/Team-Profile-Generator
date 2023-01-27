const Intern = require("../lib/Intern");

test("Should create and return intern as an object",()=>{
    const intern = new Intern(); 
    expect(typeof intern === "object").toBe(true);
});

test("Should grab name", ()=>{
    const intern = new Intern();
    expect(intern.function.name).toBe("getName");
    
    })