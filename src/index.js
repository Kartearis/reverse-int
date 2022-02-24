module.exports = function reverse (n) {
  n = Math.abs(n);
  let num = 0;
  while (n > 0)
  {
      num *= 10;
      num += n % 10;
      n = Math.floor(n / 10);
  }
  return num;
}
