function submitHandler(event){

    event.preventDefault();


    // alert("form submitted...")

    var name = document.getElementById("name")

    console.log("Name ......",name.value);

    var nameErr = document.getElementById("nameErr")

    var names = ["hiya","jiya","diya"]

    if(name.value.length < 4){
        // console.log("Name must be at least 4 characters.");
        nameErr.innerHTML = "Name must be at least 4 characters.."
        nameErr.style.color = "red";
    }
    else if(names.includes(name.value)){
        nameErr.innerHTML = "Name have been already taken.."
    }
    
    


    console.log("form submitted...");
    
}