function darkmode() {
    document.body.style.backgroundColor="red";
    document.body.style.color="yellow";
    let button=document.getElementById("button");
    button.innerHTML=`<i class="bi bi-moon-stars-fill"></i>`
    button.innerHTML+="light mode";
 }
 function lightmode() {
     document.body.style.backgroundColor="yellow";
    document.body.style.color="red";
    let button=document.getElementById("button");
    button.innerHTML=`<i class="bi bi-brightness-high"></i>`
    button.innerHTML+="dark mode";

 }
 function modechange() {
     let btext = document.getElementById("button").innerText
     if (btext=="dark mode") {
         darkmode();
     }else if (btext=="light mode") {
         lightmode();
     }
 }