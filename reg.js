function handleRegister(event) {
    event.preventDefault();
    let user = document.getElementById("uname").value
    let pass = document.getElementById("pass").value
    let userDetails;
    let arr=[]
    if(user=="") {
        alert("please enter you username");
    }else if(pass==""){
        alert("please enter you password");
    }else{
        userDetails = {
            username:user,
            password:pass
        }
        let arrObj=localStorage.getItem("userDetails");
        if(arrObj){
            arrObj=JSON.parse(arrObj);
            arr=arr.concat(arrObj);
            arr.push(userDetails)
            localStorage.setItem("userDetails",JSON.stringify(arr))
        
        }else{
            localStorage.setItem("userDetails",JSON.stringify([userDetails]))
        }
         window.location.replace("http://127.0.0.1:5500/reg.html")
    }
}
function handlelogin(event) {
    event.preventDefault();
    let user = document.getElementById("uname").value
    let pass = document.getElementById("pass").value
    let arr=[];
    if(user=="") {
        alert("please enter you username");
    }else if(pass==""){
        alert("please enter you password");
    }else{
        let arrObj=localStorage.getItem("userDetails");
        console.log(JSON.parse(arrObj));
        console.log(arrObj);
        let correctuser=false;
        let correctpass=false;
        arrObj=JSON.parse(arrObj);
        arrObj.map((value)=>{
        if (value.username==user){
            correctuser=true;
            if (value.password==pass) {
                correctpass=true;
            }
         } 
        })
        if(correctuser && correctpass){
            alert("login successfully");
        }else if(correctuser){
            alert("enter crt pass")
        }else{
            alert("enter crt user")
        }
    }   
}