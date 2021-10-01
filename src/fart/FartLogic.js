// inspired by http://jsfart.com

const farts = {
	toot : 'fart1',
	ripper : 'fart2',
	plop : 'fart3',
	squit : 'fart4',
	raspberry : 'fart5',
	squat : 'fart6',
	tuppence : 'fart7',
	liftoff : 'fart8',
	trumpet : 'fart9',
	fizzler : 'fart10',
	windy : 'fart11',
	eine : 'fart12',
	fartception: 'fart13',
	fartpoint1: 'fart14'
};

const valuesOfFarts = Object.values(farts);

const namesOfFarts = Object.keys(farts);

export const getNamesOfFarts = function (){
	return namesOfFarts;
}

const getFartNameFromIndex = function (index){
	return namesOfFarts[index];
}

const getIndexFromFartName = function (name){
	return namesOfFarts.indexOf(name);
}

const playFart = function (index){
	const audio = new Audio('https://raw.githubusercontent.com/74656c/fart.js/master/farts/'+ valuesOfFarts[index] + '.mp3');
	audio.play().then(r => console.log("I'm farting!: " + getFartNameFromIndex(index)))
		.catch(r => console.log(r));
}

export const playRandomFart = function (){
	const rand = Math.floor(Math.random() * valuesOfFarts.length);
	playFart(rand);
}

export const playSingleFart = function (name){
	const index = getIndexFromFartName(name);
	playFart(index);
}