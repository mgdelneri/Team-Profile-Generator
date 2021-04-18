const Engineer = require("../lib/Engineer");

// Test for engineer class methods
describe("Engineer", () => {
    describe("getName", () => {
        it("Should return engineer's name", () => {
            let person = new Engineer("Susan");

            expect(person.getName()).toEqual("Susan");
        })
    });

    describe("getId", () => {
        it("Should return engineer's ID", () => {
            let person = new Engineer("Margaret", 500);

            expect(person.getId()).toEqual(500);
        })
    });

    describe("getEmail", () => {
        it("Should return engineer's email address", () => {
            let person = new Engineer("Bianca", 300, "bianca@gmail.com");

            expect(person.getEmail()).toEqual("bianca@gmail.com");
        })
    });

    describe("getGitHub", () => {
        it("Should return engineer's GitHub username", () => {
            let person = new Engineer("Marcelo", 450, "cello@gmail.com", "teoscode");

            expect(person.getGitHub()).toEqual("teoscode");
        })
    });

    /* describe("getRole", () => {
        it("Should return the engineer's role", () => {

        })
    })*/

})
