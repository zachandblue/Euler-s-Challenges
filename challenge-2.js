var first = 1;
var second = 2;
var number = 0;
var sum = 0;

var sumOf = function() {
  console.log(first);
  console.log(second);

  while (number < 4000000) {
    number = first + second;

    first = second;
    second = number;

    if (number % 2 == 0) {
      sum = sum + number;
    }
  }

  console.log(sum + 2);
};

sumOf();

