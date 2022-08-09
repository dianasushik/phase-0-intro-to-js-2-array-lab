const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(){
    cats.splice(3, 0, "Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();

}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

const copyOfCats = [...cats, "Broom"];

function appendCat(name){
    return copyOfCats;
}

const copyCats = ["Arnold", ...cats];

function prependCat(name){
    return copyCats;
}


function removeLastCat(){
    return  cats.slice(0,-1);
}

function removeFirstCat() {
    return cats.slice(1);
}