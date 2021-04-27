function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0; i<=arr.length-1; i++){
        var num=arr[i]
        sum=sum+num
    }
    var mean=sum/arr.length
    var count = 0
    for(var i=0; i<=arr.length-1; i++){
        var check=arr[i]
        if(check>=mean){
            count++
        }
    }
    
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);