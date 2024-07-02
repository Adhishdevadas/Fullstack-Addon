 //let fullName="Adhish";
  //let mark=[90,50,[17,7,[20,30,70]]];
  //console.log(mark[2][2][1])+0// 

let fullName="Adhish";
   let total=0;                             // let a=10;
 function add(...numbers){
     for( let i=0; i<numbers.length;i++){
         total+= numbers[i];
     }                       // console.log(a);
                      // console.log(b);
    return total;
 }                                   //functionname(a)   
console.log(add(5,9,10,13,10));


 //let mark=[90,52,10];
 //let markobj={
   //  tamil:90,
     //english:52,
     //maths:10,
    // physics:[20,70]
 //}
 //console.log(markobj.physics[0]+markobj.physics[1])