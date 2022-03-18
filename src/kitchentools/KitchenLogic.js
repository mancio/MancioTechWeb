export const howManyNan = function (...args){
    let c = 0;
    args.forEach(el => {
        if (isNaN(el)) c++;
    })
    console.log(c);
    return c;
}