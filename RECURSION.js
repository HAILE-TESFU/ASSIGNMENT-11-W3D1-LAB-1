// function sum(array) {
// let sum = 0;
// for (const num of array) {
// sum += num;
// }
// return sum;
// }

// recursive

function sum(array){
    if(array.length===1){
        return array[i];
    }
    else array[array.length-1]+sum(array.pop());
}

console.log(sum([1,2,3,4,5]));

//============================================================
// function min(array) {
//     if (array.length > 1) {
//     let other = min(array.splice(1));
//     if (other < array[0]) {
//     return other;
//     }
//     }
//     return array[0];
//     }

function min(array){
    let min=array[0];
    for(let i=0;i<array.length;i++){
        if(min<array[i]){
            min=array[i];
        }
    }
    return min;
}