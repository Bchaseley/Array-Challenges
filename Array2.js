function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    for (var i=0; i<arr.length; i++) {
        var check = arr[i]
        if (check%2 <= 0){
            totalEvens += check
        } else {
            totalOdds += check
        }
    }

    if (totalOdds > totalEvens){
        return "Odds are larger"
    } else if(totalEvens > totalOdds){
        return "Evens are larger"
    } else {
        return "Tied"
    }
}
   
var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result);