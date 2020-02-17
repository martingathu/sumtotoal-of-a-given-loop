function mySum(n) {
    let total=0;
           for (let myNumber=1; myNumber<=n; myNumber++){
               total += myNumber;
     }
       console.log(total)
}
mySum(prompt("Enter the value of n variable where n is the last number"))
