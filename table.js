var data = {
    "data": [{ "firstName": "Darshan", "lastName": "Sharma", "age": 24 },
    { "firstName": "Sanjeev", "lastName": "Prabhakar", "age": 20 },
    { "firstName": "Virat", "lastName": "Kohli", "age": 32 },
    { "firstName": "Rohit", "lastName": "Sharma", "age": 34 },
    { "firstName": "M.S", "lastName": "Dhoni", "age": 41 },
    { "firstName": "Yuvraj", "lastName": "Singh", "age": 39 },], "message": "data fetched successfully"
};


/*for(var i = 0 ; i < 6; i++){
    console.log(data["data"][i]["firstName"]);
    console.log(data["data"][i]["lastName"]);
    console.log(data["data"][i]["age"]);
} 
*/


   function  insertfun() {

    document.getElementById("numberone").innerHTML = data["data"][0]["firstName"];
    
   }



insertfun();
