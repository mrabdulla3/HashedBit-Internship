//Question 1 Even number  1 to 100
//method 1 It is more effiecient because time complexity of this code O(n/2)
for(let i=2; i<=100; i=i+2){
    console.log(i);
}

//method 2 It is less effiecient because time complexity of this code O(n)
// for(let i=1; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }