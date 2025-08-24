const array = [10,20,244,24,50,40,60];

function highestMarksinArray(array){
let highestMarks = array[0];
for(let i = 0; i < array.length; i++){
    if(array[i] > highestMarks){
        highestMarks = array[i];
    }
}
console.log(highestMarks);
}

highestMarksinArray(array);