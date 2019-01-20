var rows = 8, cols = 8, counter = 0;

function createTable() {

  var table = document.createElement("table");
  for (var i = 0; i <= rows+1; i++) {
    var row = document.createElement("tr");
    table.appendChild(row);
    for (var j = 0; j <= cols+1; j++) {
      var col = document.createElement("td");
      if (i === 0 || j === 0 || i === rows+1 || j === cols+1) {
        col.classList.add("caption");
      } else if (counter % 2 === 0) {
        col.classList.add("black");
        counter++;
      } else {
        col.classList.add("white");
        counter++;
      }
      row.appendChild(col);
    }
    counter++;
  }
  document.body.appendChild(table);
}
var gameField = [
  [' ','H', 'G', 'F', 'E', 'D', 'C', 'B', 'A',' '],
  ['8','л', 'к', 'с', 'К', 'ф', 'с', 'к', 'л','1'],
  ['7','п', 'п', 'п', 'п', 'п', 'п', 'п', 'п','2'],
  ['6',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ','3'],
  ['5',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ','4'],
  ['4',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ','5'],
  ['3',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ','6'],
  ['2','п', 'п', 'п', 'п', 'п', 'п', 'п', 'п','7'],
  ['1','л', 'к', 'с', 'К', 'ф', 'с', 'к', 'л','8'],
  [' ','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',' ']

];
createTable();


