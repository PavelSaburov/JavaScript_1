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
