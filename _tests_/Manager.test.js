const { default: expect } = require('expect')
const Manager = require('../lib/manager.js')
const manager = new Manager ("Sharon", 2, "sharon@email.com", 8)
describe ("test manager constructor",() => {
    describe ("test all properties of manager", () => {
        it ("returns a name", () => {
            expect(manager.name).toEqual("Sharon")
        })
        it ("returns an id", () => {
            expect(manager.id).toEqual(2)
        })
        it ("returns an email", () => {
            expect(manager.email).toEqual("sharon@email.com")
        })
        it ("returns a number", () => {
        expect(manager.number).toEqual(8)
        })
    })
describe ("test manager methods", () => {
    it ("test getName", () => {
        expect(manager.getName()).toEqual("Sharon")
    })
    it ("test getId", () => {
        expect(manager.getId()).toEqual(2)
    })
    it ("test getEmail", () => {
        expect(manager.getEmail()).toEqual("sharon@email.com")
    })
    it ("test getNumber", () => {
        expect(manager.getNumber()).toEqual(8)
    })
    // it ("test getRole", () => {
    // expect(manager.getRole()).toEqual("Manager")
    // })
})
})