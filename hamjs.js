    //
    // var sum = 0;
    // for (var i = 1; i<= 10; i++)
    // sum +=i;
    // console.log("sum from 1 to 10 is" + sum);
function main() {
    console.log("sum from 1 to 10 is" + sum(1,10));
    console.log("sum from 20 to 37 is" + sum(20,37));
    console.log("sum from 35 to 49 is" + sum(35,49));
}
function sum(start, end){
    var total =0;
    for (var i = start; i<=end; i++){
        total += i;
    }
    return total;
    }