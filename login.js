function login(){
    console.log("Executing login function....");
    //get the values from the input username and password
    let username=$("#txtUsername").val();
    let password=$("#txtPassword").val();
    //med. 
    // console.log(username);
    // console.log(password);

    //med. getting value compare values with email and password in LS ....read users, add function in LS then travel the array using a loop, then if(varibles ===users attributes)
    let users=readUsers();//LS display
    //console.log(users);
    //travel the array
    let flag=false;
    for(let i=0;i<users.length;i++){
        if(username===users[i].email && password===users[i].password){
            console.log("I found it!");
            flag=true;
            window.location="home.html";
        }
    }
    if(!flag){
        console.log("Invalid credentials");
        $("#alertError").removeClass("hide");
        setTimeout(function(){
            $("#alertError").addClass("hide")
        },2000);
    }
}
function initLogin(){
    console.log("Loging script");
    //hook event
    $("#btnLogin").click(login);
}

window.onload=initLogin;//execute 