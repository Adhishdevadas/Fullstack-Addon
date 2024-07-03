// function display(result){
//     console.log(result);
//   }
  
//   function calculation(num1, num2, callback){
//     let total = num1+num2;
//     callback(total);
//   }

//   calculation(10,20,display)

// function add(num) {
//    console.log(num);
//     if (num<10) {
//         add(++num); 
        
//     }
// }
// add(1);

// function start() {
//     console.log("start");
// }
// setInterval(start,5000);

// function runing() {
//     console.log("runing");
// }
// runing();

// let num=1;
// function start() {
//     let d= new Date();
//     document.getElementById("time").innerHTML=d;
// }
// setInterval(start,1000)

async function data() {
    await fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json))
}
data();