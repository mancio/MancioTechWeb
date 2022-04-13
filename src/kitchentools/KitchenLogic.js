export const verifyInputs = function (input, pos){
   for(let i = 0; i<input.length; i++){
       if(i !== pos && isNaN(input[i])) return false;
   }
   return true;
}

const size = [];

export const getAllIngSize = function (){
    return size;
}

const addIngSize = function (value) {
    size.push(parseInt(value));
}

export const addAllIngSize = function (tag, elID){
    for (let i = 0; i<=elID; i++){
        addIngSize(document.getElementById(tag + elID).value)
    }
}