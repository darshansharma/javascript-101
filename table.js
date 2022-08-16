var data = {
    data: [
        { firstName: "Darshan", lastName: "Sharma", age: 24 },
        { firstName: "Sanjeev", lastName: "Prabhakar", age: 20 },
        { firstName: "Virat", lastName: "Kohli", age: 32 },
        { firstName: "Rohit", lastName: "Sharma", age: 34 },
        { firstName: "M.S", lastName: "Dhoni", age: 41 },
        { firstName: "Yuvraj", lastName: "Singh", age: 39 },
    ],
    message: "data fetched successfully",
};

/*for(var i = 0 ; i < 6; i++){
    console.log(data["data"][i]["firstName"]);
    console.log(data["data"][i]["lastName"]);
    console.log(data["data"][i]["age"]);
} 
*/

function insertfun() {
    for(var i =0 ; i<6;i++){
        if(i== 0) {
    document.getElementById("numberone").innerHTML =
        data["data"][i]["firstName"];

        document.getElementById("numbertwo").innerHTML =
        data["data"][i]["lastName"];

        document.getElementById("numberthree").innerHTML =
        data["data"][i]["age"];
        }



        if(i == 1){
          
            document.getElementById("number4").innerHTML =
        data["data"][i]["firstName"];

        document.getElementById("number5").innerHTML =
        data["data"][i]["lastName"];

        document.getElementById("number6").innerHTML =
        data["data"][i]["age"];
        }

       
        if(i == 2){
          
            document.getElementById("number7").innerHTML =
        data["data"][i]["firstName"];

        document.getElementById("number8").innerHTML =
        data["data"][i]["lastName"];

        document.getElementById("number9").innerHTML =
        data["data"][i]["age"];
        }


        if(i == 3){
          
            document.getElementById("number10").innerHTML =
        data["data"][i]["firstName"];

        document.getElementById("number11").innerHTML =
        data["data"][i]["lastName"];

        document.getElementById("number12").innerHTML =
        data["data"][i]["age"];
        }



        if(i == 4){
          
            document.getElementById("number13").innerHTML =
        data["data"][i]["firstName"];

        document.getElementById("number14").innerHTML =
        data["data"][i]["lastName"];

        document.getElementById("number15").innerHTML =
        data["data"][i]["age"];
        }



        if(i == 5){
          
            document.getElementById("number16").innerHTML =
        data["data"][i]["firstName"];

        document.getElementById("number17").innerHTML =
        data["data"][i]["lastName"];

        document.getElementById("number18").innerHTML =
        data["data"][i]["age"];
        }



        }
    }



insertfun();
