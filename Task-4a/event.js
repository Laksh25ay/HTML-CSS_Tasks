//Firstname Validation
function checkFname() {
    const fname = document.getElementsByName("FirstName")[0].value.trim();
    if ((fname.length > 3 && fname.length < 20) && isNaN(fname)) {
        document.getElementById("fname-error").innerHTML = "";
        document.getElementsByName("FirstName")[0].style.removeProperty("border");
        return fname;
    }
    document.getElementById("fname-error").innerHTML = "Please Enter a Valid First Name*";
    document.getElementsByName("FirstName")[0].style.border = "2px solid red";
}


//LastName Validation
function checkLname() {
    const lname = document.getElementsByName("LastName")[0].value.trim();
    if ((lname.length > 3 && lname.length < 20) && isNaN(lname)) {
        document.getElementById("lname-error").innerHTML = "";
        document.getElementsByName("LastName")[0].style.removeProperty("border");
        return lname;
    }
    document.getElementById("lname-error").innerHTML = "Please Enter a Valid Last Name*";
    document.getElementsByName("LastName")[0].style.border = "2px solid red";
}

//Mobile Number
function checkMob(){
    
    //I am trying getting element using parent Element for practise..
    //You could have used the getElementsByName("Mobile")[0] directly as well

    //Getting mobile number input field
    let mob = document.getElementsByClassName("container-div")[2].firstElementChild;
    
    //Fetching its value
    let mobNo = mob.value.trim();
    
    //Getting para element
    let errEle = document.getElementById("mob-error");

    if(mobNo.length === 10){
        errEle.innerHTML = "";
        mob.style.removeProperty("border");
        return mobNo;
    }
    errEle.innerHTML = "Please enter Valid Mobile Number*";
    mob.style.border = "2px red solid";
}

//DOB Validation
function checkDob(){
    //Finding dob input element
    let dob = document.getElementById("dob");
    
    //Extracting date from input
    let dobValue = dob.value;

    //Getting dob input element's sibbling,i.e, Label
    let dobHeading = dob.previousElementSibling;

    // let pattern = "/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/";
    if(dobValue != ""){
        dobHeading.style.removeProperty("color");
        return dobValue;
    }
    dobHeading.style.color = "red"; 
    let dobError = document.getElementById("dob-error");
    dobError.innerHTML = "Please Enter Valid DOB*";
}

//Gender Validation
function checkGender() {
    const gender = document.getElementsByName("gender");
    let gValue = "";

    gender.forEach((ele) => {
        if (ele.checked) {
            gValue = ele.value;
        }
    })

    const gLabel = document.querySelector(".Gender-Heading");
    if (gValue === "") {
        gLabel.style.color = "red";
        document.getElementById("gender-error").innerHTML = "Please Select Your Gender*";
        document.querySelector(".radio-div").style.padding = "1rem";
    }
    else {
        gLabel.style.removeProperty("color");
        document.getElementById("gender-error").innerHTML = "";
        return gValue;
    }
}

//Hobbies Validation
function checkHobbies(){
    let hobbiesDiv = document.querySelector(".hobbies-div");
    let hobbies = Array.from(hobbiesDiv.children);
    
    let hobby = [];
    hobby = hobbies.map((ele) => {
        if(ele.checked){
            return ele.value;
        }
    }).filter((ele) => ele!== undefined);
    
    let hobbyError = document.getElementById("hobby-error");
    let hLabel = hobbiesDiv.firstElementChild;

    if(hobby.length === 0){
        hLabel.style.color = "red";
        hobbyError.innerHTML = "Please Select Atleast One Hobby!*"
    }

    else{
        hLabel.style.removeProperty("color");
        hobbyError.innerHTML = "";
        let otherHobby = "";
        for(let val of hobby){
            if(val === "Other"){
                otherHobby = prompt("Please Specify other Hobby").trim();
                let otherIdx = hobby.indexOf("Other");
                hobby.splice(otherIdx,1);
                hobby.push(otherHobby);
            }
        }
        return hobby;
    }
}

//Designation Validation
function checkDesignation(){
    let index = document.getElementById("designation").selectedIndex;
    let allDesignations = document.getElementById("designation").options;

    let designation = allDesignations[index].value;
    return designation;
}

//Salary Fetch
function checkSalary(){
    let salTag = document.getElementById("salRanges");
    
    let sal = salTag.value.trim();
    let salError = document.getElementById("sal-Error");

    if(!isNaN(sal) && sal !== ""){
        salTag.style.removeProperty("border");
        salError.innerHTML = "";    
        return sal;
    }
    salError = document.getElementById("sal-Error");
    salError.innerHTML = "Please Enter Valid Salary*";
    salTag.style.border = "2px solid red";
}

//Address Validation
function checkAddress(){
    let addressTag = document.getElementById("address");
    let address = addressTag.value.trim();

    let addressError = document.getElementById("address-error");
    
    if(address !== ""){
        addressError.innerHTML = "";
        addressTag.style.removeProperty("border");
        return address;
    }
    addressTag.style.border = "2px red solid";
    addressError.innerHTML = "Please Enter a valid Address*";

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let fname = checkFname();
    let lname = checkLname();
    let gender = checkGender();
    let mobileNo = checkMob();
    let dob = checkDob();
    let hobbies = checkHobbies();
    let designation = checkDesignation();
    let sal = checkSalary();
    let address = checkAddress();
    console.log(fname);
    console.log(lname);
    console.log(gender);
    console.log(mobileNo);
    console.log(dob);
    console.log(hobbies);
    console.log(designation);
    console.log(sal);
    console.log(address);
});