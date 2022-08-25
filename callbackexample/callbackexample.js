function A(x){
    
    console.log("A");
    x();
    
}


function B(){
    
    console.log("B");
    
    
}


function C(){
   
    console.log("C");
  
}

A(B());
