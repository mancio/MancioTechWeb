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

export const saveJsonToMemory = function (data){
    sessionStorage.setItem('trivial_questions',JSON.stringify(data));
}

export const loadJsonFromMemory = function (){
    const questions = sessionStorage.getItem('trivial_questions');
    return JSON.parse(questions);
}

export const getQuestionByNumber = function (number){
    return loadJsonFromMemory().result[number].question;
}

export const getAnswerByNumber = function (number){
    return loadJsonFromMemory().result[number].correct_answer;
}

export const saveSetUpToMemory = function (players, category, difficulty, quNumber, time, type){
    sessionStorage.setItem('trivial_setup_players', players);
    sessionStorage.setItem('trivial_setup_category', category);
    sessionStorage.setItem('trivial_setup_difficulty', difficulty);
    sessionStorage.setItem('trivial_setup_quNumber', quNumber);
    sessionStorage.setItem('trivial_setup_time', time);
    sessionStorage.setItem('trivial_setup_type', type);
    sessionStorage.setItem('trivial_setup_current_player', 1);
}

export const loadSetUpFromMemory = function (name){
    return sessionStorage.getItem('trivial_setup_' + name);
}

export const getCurrentPlayer = function (){
    return sessionStorage.getItem('trivial_setup_current_player');
}

export const setNextPlayer = function (){
    let current = getCurrentPlayer();
    const players = loadSetUpFromMemory('players');
    if(current === players){
        sessionStorage.setItem('trivial_setup_current_player', 1);
    }else {
        current++;
        sessionStorage.setItem('trivial_setup_current_player', current);
    }
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