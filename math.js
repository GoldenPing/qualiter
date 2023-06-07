function sumSmallNumbers(a,b){
    if(a > 9 || a < 0 || b > 9 || b < 0){
    throw new Error("Your are cheating !")
    }
    return a + b; 
   };
module.exports = sumSmallNumbers

function smallNumberSubstraction(a, b) {
    if (a < b) {
    throw new Error("sorry you can't substract to get a negative result");
    }
    
    const result = a - b;
    
    if (result < 0 || result > 9) {
    throw new Error("you are cheating tring to substract big numbers here");
    }
    
    return result;
}

module.exports = smallNumberSubstraction    
