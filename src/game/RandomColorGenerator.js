const colors = [
    '#ff0000',
    '#0066ff',
    '#ff6699',
    '#ff0066',
    '#cccc00'
];

let picked = 'xxxx';

export const genRandomColor = function (){
    let rand = Math.floor(Math.random() * colors.length);
    let newColor = colors[rand];
    if(newColor === picked) return colors[rand%colors.length];
    picked = newColor;
    return picked;
}

