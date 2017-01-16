import * as chai from "chai";

let expect = chai.expect;

describe("Basic Tests", ()=>{
    describe("SubBasicTest1", ()=>{
        it("should be true",()=>{
            expect(true).not.to.be.false;
        })
    });
    describe("SubBasicTest2", ()=>{
        it("should be false",()=>{
            expect(false).to.be.false;
        })
    });
    describe("SubBasicTest3", ()=>{
        it("is never to be expected, that",()=>{
            expect(false).to.be.false;
        })
        it("is never to be expected, that",()=>{
            expect(false).to.be.false;
        })
        it("is never to be expected, that",()=>{
            expect(false).to.be.false;
        })
    });

});