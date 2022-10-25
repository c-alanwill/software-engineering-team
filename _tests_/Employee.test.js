const { default: expect } = require('expect')
const Employee = require('../lib/employee.js')
const employee = new Employee ("Steve", 1, "steve@email.com")
describe ("test employee constructor",() => {
    describe ("test all properties of employee", () => {
        it ("test name", () => {
            expect(employee.name).toEqual("Steve")
        })
        it ("test id", () => {
            expect(employee.id).toEqual(1)
        })
        it ("test email", () => {
            expect(employee.email).toEqual("steve@email.com")
        })
        // it ("test role", () => {
        //     expect(employee.role).toEqual("Employee")
        // })
    })
describe ("test employee methods", () => {
    it ("test getName", () => {
        expect(employee.getName()).toEqual("Steve")
    })
    it ("test getId", () => {
        expect(employee.getId()).toEqual(1)
    })
    it ("test getEmail", () => {
        expect(employee.getEmail()).toEqual("steve@email.com")
    })
    // it ("test getRole", () => {
    //     expect(employee.getRole()).toEqual("Employee")
    // })
})
})