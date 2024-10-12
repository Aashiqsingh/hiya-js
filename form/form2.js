function submitHandler(event){
    event.preventDefault();
    // alert("Form is submitted..")
    // console.log("Form is submitted")

    var name = document.getElementById("name")
    console.log(name.value);

    var age = document.getElementById("age")
    console.log(age.value);

    var nameErr = document.getElementById("nameErr")
    var ageErr = document.getElementById("ageErr")

    if(name.value === "")
    {
        // alert("Name is required")
        nameErr.innerHTML = "Name is required"
        nameErr.style.color = "red"
    }
    if(age.value === ""){
        // alert("Age is required")
        ageErr.innerHTML = "Age is required"
        ageErr.style.color = "red"
    }


    console.log("form is submitted...");
    
    
}