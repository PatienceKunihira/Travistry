const expect = require("chai").expect;
const Addition = require("../app.js");


describe("Addition", function () {
    it("Should return the sum", function () {

       let AdditionInstance = new Addition();
       expect(AdditionInstance.add(1, 2)).to.equal(3);
    });
});
