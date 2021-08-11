const key = process.env.API_KEY; // Please use your personal. Is free on openweathermap.org

export const cities = ['Bologna'];

export const getTodayWeather = function (city){
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            return result;
        })
        .catch(er =>{
            console.log("unable to check weather");
            console.log(er);
            return "undefined";
        });
}

