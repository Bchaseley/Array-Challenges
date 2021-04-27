function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (var i=0; i<=n-3; i++){
        var newNum=fibArr[i]+fibArr[i+1]
        fibArr.push(newNum)

    }
    
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result);