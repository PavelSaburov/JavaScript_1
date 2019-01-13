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

//второе задание
let num = 0;
do {
  if (num === 0) {
    console.log("0 - это ноль");
  } else if (num % 2 === 0) {
    console.log(num + " - четное число");
  } else {
    console.log(num + " - нечетное число");
  }
  num++;
} while (num<=10);

//третье задание
for (let j = 0; j < 9; console.log(j), j++) {}

//четвертое задание
for (let j = 1, s = "*"; j < 21; console.log(s), j++, s += "*") {}
