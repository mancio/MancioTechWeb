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

export const setTotalPlayers = function (players){
    sessionStorage.setItem('trivial_total_players', players);
}

export const getTotalPlayers = function (){
    return sessionStorage.getItem('trivial_total_players');
}

export const savePlayerStatus = function (playerNumber, json, score, currentQuestion, totalQuestions, timeLeft){
    sessionStorage.setItem('trivial_player' + playerNumber + '_json', JSON.stringify(json));
    sessionStorage.setItem('trivial_player' + playerNumber + '_score', score);
    sessionStorage.setItem('trivial_player' + playerNumber + '_currentQuestion', currentQuestion);
    sessionStorage.setItem('trivial_player' + playerNumber + '_totalQuestions', totalQuestions);
    sessionStorage.setItem('trivial_player' + playerNumber + '_timeLeft', timeLeft);

}

export const setReadyStatus = function (value){
    sessionStorage.setItem('trivial_ready', value);
}

export const getReadyStatus = function (){
    return sessionStorage.getItem('trivial_ready');
}

export const setPlayerProperty = function (playerNumber, property, value){
    sessionStorage.setItem('trivial_player' + playerNumber + '_' + property, value);
}

export const getPlayerProperty = function (playerNumber, property){
    return sessionStorage.getItem('trivial_player' + playerNumber + '_' + property);
}

export const loadSetUpFromMemory = function (name){
    return sessionStorage.getItem('trivial_setup_' + name);
}

export const setCurrentPlayer = function (player){
    sessionStorage.setItem('trivial_setup_current_player', player);
}

export const getCurrentPlayer = function (){
    return sessionStorage.getItem('trivial_setup_current_player');
}

export const setNextPlayer = function (){
    let current = getCurrentPlayer();
    const players = getTotalPlayers();
    if(current === players){
        setCurrentPlayer(1);
        return 1;
    }else {
        current++;
        setCurrentPlayer(current);
        return current;
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