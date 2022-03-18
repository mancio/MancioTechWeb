export const checkNaN = function (input){
        input.forEach(el => {
            if (isNaN(el)) return true;
        })
        return false;
}