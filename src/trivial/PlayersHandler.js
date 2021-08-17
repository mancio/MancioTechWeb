export const categories = [
    'any',
    'general',
    'books',
    'film',
    'music',
    'musical',
    'television',
    'videogame',
    'boardgame',
    'nature',
    'computer',
    'mathematics',
    'mythology',
    'sports',
    'geography',
    'history',
    'politics',
    'art',
    'celebrities',
    'animals',
    'vehicles',
    'comics',
    'gadgets',
    'anime',
    'cartoons'
];

export const difficulties = [
    'any',
    'easy',
    'medium',
    'hard'
]


const setCategoryMap = function (){
    const map = new Map();
    let number = 8;
    categories.forEach(name => {
        map.set(name, number);
        number++;
    })
    return map;
}

const getNumberByCategory = function (category){
    const map = setCategoryMap();
    return map.get(category);
}

export const numberValidator = function (input, min, max){
    return input >= min && input<=max;
}

export const getQuestions = function (number, category, difficulty, type){
    const numRequest = checkNumber(number);
    const catRequest = checkCategory(category);
    const difRequest = checkDifficulty(difficulty);
    const typeRequest = checkType(type);
    fetch('https://opentdb.com/api.php?' + numRequest + catRequest + difRequest + typeRequest)
        .then(res => res.json())
        .then(result => {
            console.log("question list found");
            return result;
        })
        .catch(er => {
            console.log("there is an error")
            console.log(er);
            return 'undefined';
        })
}

const checkNumber = function (number){
    const amount = 'amount=';
    if(number === 'max') return  amount + 50;
    if(number === 'min') return  amount + 10;
    else return amount + number;
}

const checkCategory = function (category){
    if(category === 'any') return '';
    const categoryTag = '&category='
    const categoryNum = getNumberByCategory(category);
    return categoryTag + categoryNum;
}

const checkDifficulty = function (difficulty){
    if(difficulty === 'any') return '';
    const difTag = '&difficulty=';
    return difTag + difficulty;
}
const checkType = function (type){
    if(type === 'any') return '';
    const typeTag = '&type=';
    return typeTag + type;
}