var test1 = 600851475143;
var test = 60085143;
var n = 1;

while (n <= test) {
  if (test % n == 0) {
    var i = 2;
    var primeNumber = false;

    while (i < n) {
      if (n % i == 0) {
        primeNumber = false;
        break;
      } else {
        primeNumber = true;
        i++;
      }
    }
    if (primeNumber) {
      console.log(n);
    } else {
    }
  }
  n++;
}

