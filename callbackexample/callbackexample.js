var one = function(fx){
    fx();
}

var two = function(){
    console.log("A","B","C");
}

one(two);