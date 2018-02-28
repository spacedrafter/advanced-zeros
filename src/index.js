module.exports = function getZerosCount(number, base) {
  var answer = 0;
  var temp = base;
  var multiplier = 2;
  var factorize = [];
  while ( temp > 1) {
    while ( temp % multiplier == 0) {
      temp = Math.floor(temp / multiplier);
      factorize.push(multiplier);
    }
    multiplier += 1;
  }

  multiplier = factorize[factorize.length -1];

  var exponent = 0;
  for (var i = 0; i < factorize.length; i ++) {
    if (factorize[i] == factorize[factorize.length - 1]) {
      exponent += 1;
    }
  }

  for (var i = multiplier; Math.floor(number / i) >= 1; i *= multiplier) {
      answer += Math.floor(number / i);
    }

  return Math.floor(answer / exponent);
}