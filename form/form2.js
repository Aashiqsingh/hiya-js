function submitHandler(event) {
    event.preventDefault();
    // alert("Form is submitted..")
    // console.log("Form is submitted")

    var name = document.getElementById("name")
    console.log(name.value);



    var nameErr = document.getElementById("nameErr")
    var ageErr = document.getElementById("ageErr")

    if (name.value === "") {
        // alert("Name is required")
        nameErr.innerHTML = "Name is required"
        nameErr.style.color = "red"
    }
    else if (name.value.length <= 3) {
        nameErr.innerHTML = "Name must be at least 3 characters"
    }

    var age = document.getElementById("age")
    console.log(age.value);
    if (age.value === "") {
        // alert("Age is required")
        ageErr.innerHTML = "Age is required"
        ageErr.style.color = "red"
    }
    else if(age.value <= 18)
    {
        ageErr.innerHTML = " You are not eligible for vote..."
    }
    else if(age.value >= 'a' && age.value <= 'z' ){
        ageErr.innerHTML = "Age must be a number"
    }

    



    console.log("form is submitted...");


}