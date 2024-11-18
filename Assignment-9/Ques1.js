function variableScop(){
   if(true){
    var a=5;
    let c=8;
    const b=7;
    console.log("Inside the if block let",c);
   }
   //let is block level scop it is not accessible outside the if block so we can't access here
   //console.log(c);

   // b is constant so we can't override its value and it is not accessible outside the block
    //       b=3;
    //   console.log(b);

     // a is a var type it it can very with time we can override its value and it is function level scop
      a=4;
     console.log(a);
}
variableScop();