// второе задание
var a = 2;
var x = 1 + (a *= 2);
document.write("<h2>Второе задание</h2>");
document.write(`<p>Результат: ${x}</p>`);

//третье задание
var a = -1, b = -2;
document.write("<h2>Третье задание</h2>");
if (a >= 0 && b >= 0) {
  document.write(`<p>Результат: ${a-b}</p>`);
} else if (a < 0 && b < 0) {
  document.write(`<p>Результат: ${a*b}</p>`);
} else {
  document.write(`<p>Результат: ${a+b}</p>`);
}

//четвертое задание
document.write("<h2>Четвертое задание</h2>");
a = Math.round(Math.random()*15);
switch (a) {
  case 0: document.write("0 <br>");
  case 1: document.write("1 <br>");
  case 2: document.write("2 <br>");
  case 3: document.write("3 <br>");
  case 4: document.write("4 <br>");
  case 5: document.write("5 <br>");
  case 6: document.write("6 <br>");
  case 7: document.write("7 <br>");
  case 8: document.write("8 <br>");
  case 9: document.write("9 <br>");
  case 10: document.write("10 <br>");
  case 11: document.write("11 <br>");
  case 12: document.write("12 <br>");
  case 13: document.write("13 <br>");
  case 14: document.write("14 <br>");
  case 15: document.write("15 <br>");
}

//пятое задание
function summ (arg1, arg2) {
  "use strict"
  return arg1 + arg2;
}

function diff (arg1, arg2) {
  "use strict"
  return arg1 - arg2;
}

function mult (arg1, arg2) {
  "use strict"
  return arg1 * arg2;
}

function div (arg1, arg2) {
  "use strict"
  return arg1 / arg2;
}

//шестое задание
function mathOperation (arg1, arg2, operation) {
  "use strict"
  switch (operation) {
    case "+": {
      document.write(`<p>Результат: ${summ(arg1, arg2)}</p>`);
      break;
    }
    case "-": {
      document.write(`<p>Результат: ${diff(arg1, arg2)}</p>`);
      break;
    }
    case "*": {
      document.write(`<p>Результат: ${mult(arg1, arg2)}</p>`);
      break;
    }
    case "/": {
      document.write(`<p>Результат: ${div(arg1, arg2)}</p>`);
      break;
    }
    default: document.write(`<p>Неизвестная операция</p>`);
  }
}
document.write("<h2>Пятое, шестое задание</h2>");
mathOperation(1, 2, "/");

//седьмое задание
document.write("<h2>Седьмое задание</h2>");
document.write("<h3>Сравнение с приведением типов</h3>");
if (null == 0){
  document.write(`<p>Результат: null == 0. Истина</p>`);
} else {
  document.write(`<p>Результат: null == 0. Ложь</p>`);
}
document.write("<h3>Строгое сравнение</h3>");
if (null === 0){
  document.write(`<p>Результат: null === 0. Истина</p>`);
} else {
  document.write(`<p>Результат: null === 0. Ложь</p>`);
}

document.write(`<p>Вывод: null не имеет цифрового эквивалента. Это примитивное значение, по сути, показывающее отсутсвие какого-либо значения</p>`);

//восьмое задание
document.write("<h2>Восьмое задание</h2>");
function power (val, pow) {
  if (pow===1) {
    return val;
  } else {
    return val*power(val, pow-1);
  }
}
document.write(`<p>Результат: ${power(2,5)}</p>`);





