var letter = /^[a-zA-Z]+$/;
var mobileEx = /^[6-9]{1}[0-9]{9}$/;
function submitHandler(event){
    event.preventDefault();


    var name = document.getElementById("name")

    if(name.value.match(letter)){
        console.log("name is valid...");
        
    }
    else{
        console.log("name is invalid...");
    }


    var mobile = document.getElementById("mobile").value;

    if(mobile.match(mobileEx)){
        console.log("mobile is valid...");
        
    }
    else{
        console.log("mobile is invalid...");
    }


    var nameAns = document.getElementById("nameAns")
    nameAns.innerHTML = name.value;

    var mobileAns = document.getElementById("mobileAns")
    mobileAns.innerHTML = mobile;
    
}