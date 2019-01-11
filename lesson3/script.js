//первое задание
function isPrime (arg) {
  if (arg < 2) {
    return false;
  }
  for (let i = 2; i <= Math.round(Math.sqrt(arg)); i++) {
    if (arg % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
