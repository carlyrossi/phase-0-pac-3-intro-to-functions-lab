function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

let str = `hello`
function logShout(string) {
    console.log(str.toUpperCase())
}

let str2 = `HELLO`
function logWhisper(string2) {
    console.log(str2.toLowerCase());
}

function sayHiToGrandma(string){
    if(string === string.toLowerCase()){
        return "I can't hear you!"
    }
    else if (string === string.toUpperCase()){
        return "YES INDEED!"
    }
    else if (string === "I love you, Grandma."){
        return "I love you, too."
    }
}