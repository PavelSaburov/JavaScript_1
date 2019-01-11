//первое задание
function isPrime (arg) {
  if (arg < 2) {
    return false;
  }
  let i = 2;
  while ( i <= Math.round(Math.sqrt(arg))) {
    if (arg % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}

let i = 0;
while ( i <= 100) {
  if (isPrime(i)) {
    console.log(i);
  }
  i++;
}
