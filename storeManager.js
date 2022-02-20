const LS_KEY="users";
function saveUser(user){
    //load the old data from LS
    let oldData=readUsers();
    //merge the data
    oldData.push(user);

    let val=JSON.stringify(oldData);//parse into JSON string

    localStorage.setItem(LS_KEY,val);//send to local storage
    // console.log(val); //string into JSON
}

function readUsers(){
    //get the values from LS
    let data=localStorage.getItem(LS_KEY);
    if(!data){//not users?
        return[];//create the array for the first registration
    } else{
        let list=JSON.parse(data); //pars string back into the object
        return list;
    }
}