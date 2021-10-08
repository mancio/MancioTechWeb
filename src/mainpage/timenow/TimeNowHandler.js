export const getMyIP = async function (){
    fetch('https://api.ipify.org?format=json')
        .then(r => r.json())
        .then(d => {
            console.log(d.ip);
            return d.ip;
        }).catch(err => console.log(err))
        .finally(() => {return 0});
}