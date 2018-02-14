var vending_machine = function(arr,item,num){
  // code here
     if(!Array.isArray(arr) || !arr.length>0 || !arr.every(theArr=> typeof theArr === "array")){
        throw new TypeError;
    }

    var output =[];
    var theArr = ["Pepsi","Coke","Sprite"];
    for(var i = 0; i<arr.length;i++){
        if(theArr !== arr){
            output.push(TypeError);
        }else if(person !== "string"){
            output.push(TypeError);
        }else if(person !== num){
            output.push(TypeError);
        }
        else{
            var theArr = theArr[Math.floor(Math.random()*theArr.length)]; //random 
            output.push(theArr);
        }
    }
  

    return theArr;
}

////////////////////
//// Unit Tests ////
////////////////////

describe("vending_machine", function(){
  it("should be a function", function(){
    expect(vending_machine instanceof Function).toBeTruthy();
  });

  it("should throw an Error if the first argument is not an array", function(){
    expect(()=>vending_machine("Not an array","Pepsi",1)).toThrow();
  });

  it("should throw an Error if the second argument is not a string", function(){
    expect(()=>vending_machine("Pepsi",1,1)).toThrow();
  });
  
  it("should throw an Error if the third argument is not an number", function(){
    expect(()=>vending_machine("Pepsi","Pepsi","Not a Number")).toThrow();
  });

  it("should return the same array given as an argument", function(){
    var theArr = ["Pepsi","Coke","Sprite"];
    expect(vending_machine(theArr,"Coke", 2)).toBe(theArr);
  });

  it("should return the array with the item added to it the number of times given", function(){
    var theArr = ["Pepsi","Sprite"];
    expect(vending_machine(theArr,"Coke", 1)).toContain("Coke");
    expect(vending_machine(theArr,"Coke", 3).filter(x=>x==="Coke").length).toBe(4); // 4 since should have added from previous assertion
  });

  it("should be able to handle an empty array for input", function(){
    var theArr = [];
    expect(()=>vending_machine(theArr,"Coke", 2)).not.toThrow();
  });
});