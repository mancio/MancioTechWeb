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

export const qType = [
    'any',
    'multiple',
    'true/false'
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
    console.log('https://opentdb.com/api.php?' + numRequest + catRequest + difRequest + typeRequest);
    return fetch('https://opentdb.com/api.php?' + numRequest + catRequest + difRequest + typeRequest)
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

export const saveToMemory = function (data){
    localStorage.setItem('trivial_questions',data);
}

export const loadFromMemory = function (){
    const questions = localStorage.getItem('trivial_questions');
    return JSON.parse(questions);
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
    const typeTag = '&type=';
    if(type === 'any') return '';
    if(type === 'true/false') return typeTag + 'boolean';
    return typeTag + type;
}