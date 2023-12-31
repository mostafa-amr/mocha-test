//task with all bouns

import * as myFun from'../index.js'


const expect = chai.expect
const assert = chai.assert
const should = chai.should()



describe("test capital function with expect", function(){

 
    
    it("return string", function(){
        expect(myFun.capitalizeText("mostafa")).to.be.an("string")
    })

    it("is captalized", function(){
        
            expect(myFun.capitalizeText("mostafa")).to.equal("MOSTAFA");

    
       
    })

    it("with number throw error", function(){
      expect(function(){myFun.capitalizeText(12)}).throw(TypeError, "parameter should be string")
    })
    it("is not hello", function(){
        //this one will fail
        expect(myFun.capitalizeText("hello")).to.not.equal("HELLO")
    })
})

describe("test capital function with assert", function(){
    // it('works',()=>{})
    it("return string", function(){
        assert.typeOf(myFun.capitalizeText("mostafa"), 'string');
    })

    it.skip("is captalized", function(){
        assert.equal(myFun.capitalizeText("mostafa"), 'MOSTAFA')
    })

    it("with number throw error", function(){
      assert.throws(function(){myFun.capitalizeText(12)},(TypeError, "parameter should be string"))
    })
    it("is not hello", function(){
        //this one will not fail
        assert.notEqual(myFun.capitalizeText("mostafa"),"HELLO")
    })
})

let counter

describe("test Array function with should will display after 5sec", function(){
   
    before(function (done) {
        counter = 0;
        this.timeout(5000);

        setTimeout(done, 4500);
      });
      beforeEach(function () {
        counter += 1;
        console.log("counter = :",counter)
      }); 
      it("test that return data type array", function(){
        myFun.createArray(3).should.be.an("array")
    })
    it("test that return array lenght of 3 and has 1", function(){
        myFun.createArray(3).should.lengthOf(3).that.includes(1)
    })
})