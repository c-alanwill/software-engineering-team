const { default: expect } = require('expect')
const Intern = require('../lib/intern.js')
const newIntern = new Intern ("Alex", 3, "alex@email.com", "Intern")
describe ("test intern constructor",() => {
    describe ("test all properties of intern", () => {
        it ("returns a name", () => {
            expect(newIntern.name).toEqual("Alex")
        })
        it ("returns an id", () => {
            expect(newIntern.id).toEqual(3)
        })
        it ("returns an email", () => {
            expect(newIntern.email).toEqual("alex@email.com")
        })
        // it ("test role", () => {
        // expect(intern.role).toEqual("Intern")
        // })
    })
describe ("test intern methods", () => {
    it ("test getName", () => {
        expect(newIntern.getName()).toEqual("Alex")
    })
    it ("test getId", () => {
        expect(newIntern.getId()).toEqual(3)
    })
    it ("test getEmail", () => {
        expect(newIntern.getEmail()).toEqual("alex@email.com")
    })
    // it ("test getRole", () => {
    // expect(intern.getRole()).toEqual("Intern")
    // })
})
})