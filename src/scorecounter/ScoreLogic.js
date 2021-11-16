import Asso from './cards/asso.JPG';
import Due from './cards/due.JPG';
import Tre from './cards/tre.JPG';
import Quattro from './cards/quattro.JPG';
import Cinque from './cards/cinque.JPG';
import Sei from './cards/sei.JPG';
import Sette from './cards/sette.JPG';
import Fante from './cards/fante.JPG';
import Cavallo from './cards/cavallo.JPG';
import Re from './cards/re.JPG';


export const players = ['one', 'two', 'three', 'four'];

export const saveScore = function (playerName, score){
    localStorage.setItem(playerName, score);
}

export const loadScore = function (playerName){
    return localStorage.getItem(playerName);
}

/*
il 7 vale 21 punti
il 6 vale 18 punti
l’Asso vale 16 punti
il 5 vale 15 punti
il 4 vale 14 punti
il 3 vale 13 punti
il 2 vale 12 punti
le figure (re, cavallo e donna) valgono 10 punti
 */
const primera = [
    {
        'name': 'Asso',
        'value': 16,
        'pic': Asso,
    },
    {
        'name': 'Due',
        'value': 12,
        'pic': Due,
    },
    {
        'name': 'Tre',
        'value': 13,
        'pic': Tre,
    },
    {
        'name': 'Quattro',
        'value': 14,
        'pic': Quattro,
    },
]