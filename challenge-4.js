var x = 1;
var y = 1;
var n = 1000;
var myArray = [];
for (x = 1; x < n; x++) {
  for (y = 1; y < n; y++) {
    var product = x * y + "";
    var testProduct = x * y + "";
    var forwards = product.split("");
    var backwards = testProduct.split("");
    var backwards = backwards.reverse();
    var forwardString = forwards.join();
    var backwardString = backwards.join();
    var integer = parseFloat(forwardString.replace(/,/g, ""));
    if (backwardString == forwardString) {
      myArray.push(integer);
    }
  }
}

console.log(Math.max.apply(null, myArray));

