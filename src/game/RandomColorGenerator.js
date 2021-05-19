const colors = [
    '#ff0000',
    '#0066ff',
    '#6de804',
    '#ff6699',
    '#ff0066',
    '#cccc00',
    '#7e08db'
];

let picked = 'xxxx';

export const genRandomColor = function (){
    let rand = Math.floor(Math.random() * colors.length);
    let newColor = colors[rand];
    if(newColor === picked) return colors[Math.abs(rand-1%colors.length)];
    picked = newColor;
    return picked;
}

