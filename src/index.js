module.exports = function getZerosCount(number, base) {
  var count = 0;
  var temp = base;
  var multiplier = 2;
  while ( temp > 1) {
    while ( temp % multiplier == 0) {
      temp = Math.floor(temp / multiplier);
    }
    multiplier += 1;
  }

  multiplier -= 1;

  for (var i = multiplier; Math.floor(number / i) >= 1; i *= multiplier) {
      count += Math.floor(number / i);
    }
  return count;
}