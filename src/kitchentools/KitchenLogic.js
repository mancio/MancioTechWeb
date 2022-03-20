export const verifyInputs = function (input, pos){
   for(let i = 0; i<input.length; i++){
       if(i !== pos && isNaN(input[i])) return false;
   }
   return true;
}