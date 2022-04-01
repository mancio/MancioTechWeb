const dashkey = 'dashtext';

export const getText = function (){
    return localStorage.getItem(dashkey) || '';
}

export const saveText = function (text){
    localStorage.setItem(dashkey, text);
}

export const saveToTXT = function (text){
    const element = document.createElement('a');
    const file = new Blob([text], {
        type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myNotes.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
}