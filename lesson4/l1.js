
function getObjectNum (num) {
  var obj = {};
  num = Number(num);
  if (num >= 0 && num < 1000) {
    obj.one = num % 10;
    num = Math.floor(num/10);
    obj.decade = num % 10;
    num = Math.floor(num/10);
    obj.hundred = num;
    return obj;
  }
  console.log("Invalid number");
  return obj;
}
console.log(getObjectNum(726));
