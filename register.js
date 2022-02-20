//create the constructor es2015/class
class User{
    //these are parameters--------------------------------------------
    constructor(email,password,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=password;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}
function isValid(user){
    //return false when the user is not valid
    //return true when the user is valid
    let valid=true;
    //we need to reset orginal appearance by removing the alert error
    $("input").removeClass("alert-error");
    //validations
    if(user.email.length==0){
        // if we get here it means that email is empty and it is not valid
        valid=false;
        $("#txtEmail").addClass("alert-error");
        console.log("Missing email");
    }
    if(user.password.length==0){
        $("#txtPassword").addClass("alert-error");
        valid=false;
        console.log("Missing password");
    }
    if(user.fname.length==0){
        $("#txtFirst").addClass("alert-error");
        valid=false;
        console.log("Missing first name");
    }
    if(user.lname.length==0){
        $("#txtLast").addClass("alert-error");
        valid=false;
        console.log("Missing last name");
    }
    if(user.age.length==0){
        $("#txtAge").addClass("alert-error");
        valid=false;
        console.log("Missing age");
    }
    if(user.address.length==0){
        $("#txtAddress").addClass("alert-error");
        valid=false;
        console.log("Missing address");
    }
    if(user.phone.length==0){
        $("#txtPhone").addClass("alert-error");
        valid=false;
        console.log("Missing phone number");
    }
    if(user.payment.length==0){
        $("#selPayment").addClass("alert-error");
        valid=false;
        console.log("Missing payment");
    }
    if(user.color.length==0){
        $("#txtColor").addClass("alert-error");
        valid=false;
        console.log("Missing color");
    }
    //add the validation for first name and last name
    return valid;
}

document.getElementById("myForm").reset();


//local variable
function registerUser(){
    let email=$("#txtEmail").val();//check id in HTML
    let password=$("#txtPassword").val();
    let first=$("#txtFirst").val();
    let last=$("#txtLast").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#txtPhone").val();
    let payment=$("#selPayment").val();
    let color=$("#txtColor").val();

    let user = new User(email,password,first,last,age,address,phone,payment,color);
    if(isValid(user)){
        saveUser(user);//this is in the storeManager.js
    }
    clearForm();
}
function clearForm(){
    $("#txtEmail").val("");
    $("#txtPassword").val("");
    $("#txtFirst").val("");
    $("#txtLast").val("");
    $("#txtAge").val("");
    $("#txtAddress").val("");
    $("#txtPhone").val("");
    $("#txtPayment").val("");
    $("#txtColor").val("");
}
function init(){
    console.log("Init Register");
    //hook event
    $("#btnRegister").click(registerUser);
  
}
window.onload=init;