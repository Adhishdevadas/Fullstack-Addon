//let word ="kgcas";

// arr=[word.charAt(0),word.charAt(1), word.charAt(2)]
// for(let i=0; i< word.length; i++){
// arr[1] =word.charAt(i);
// }
//console.log(word.endsWith("s"));

function minFinder(arr){
   return Math.max(...arr);
}

function maxFinder(arr){
    return Math.min(...arr);
 }
console.log(minFinder([10,2,3,6,23]));