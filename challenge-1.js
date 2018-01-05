var number = 1;
var sum = 0;

var sumOf = function(n) {
    for (i = 1; i < n; i++) {

        if (number%3 == 0) {
            sum = sum + number;
        } else if (number%5 == 0){
            sum = sum + number;
        } else {

        };
        number = number + 1;
    };
    console.log(sum);
}

sumOf(1000);
