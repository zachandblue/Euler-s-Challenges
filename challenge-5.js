var n = 1;
var i = 1;

while (smallestNumber != true) {
  var divisibleByAll = true;
  for (i = 1; i < 21; i++) {
    if (n % i != 0) {
      divisibleByAll = false;
    }
  }
  if (divisibleByAll) {
    console.log(n + " is divisible by all");
    var smallestNumber = true;
  } else {
    n++;
  }
}

