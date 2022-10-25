const { default: expect } = require('expect')
const Engineer = require('../lib/engineer.js')
const engineer = new Engineer ("Bob", 4, "bob@email.com", "Engineer")

describe("test engineer constructor",() => {
    describe ("test all properties of engineer", () => {
        it ("returns a name", () => {
            expect(engineer.name).toEqual("Bob")
        })
        it ("returns an id", () => {
            expect(engineer.id).toEqual(4)
        })
        it ("returns an email", () => {
            expect(engineer.email).toEqual("bob@email.com")
        })
        // it ("returns github info", () => {
        //     expect(engineer.email).toEqual("bob@email.com")
        // })

    })
describe ("test engineer methods", () => {
    it ("test getName", () => {
        expect(engineer.getName()).toEqual("Bob")
    })
    it ("test getId", () => {
        expect(engineer.getId()).toEqual(4)
    })
    it ("test getEmail", () => {
        expect(engineer.getEmail()).toEqual("bob@email.com")
    })
    // it ("test getRole", () => {
    // expect(engineer.getRole()).toEqual("Engineer")
    // })
})
})