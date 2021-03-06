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
      col.innerText = setFigure(i, j, col);
      row.appendChild(col);
    }
    counter++;
  }
  document.body.appendChild(table);
}

function setFigure (row, col, td) {
  var type = typeof gameField[row][col];
  if (type === "string" || type === "number") {
    return gameField[row][col];
  } else {
    td.classList.add(gameField[row][col].classColor);
    return gameField[row][col].avatar;
  }
}
createTable();


