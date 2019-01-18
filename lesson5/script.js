var rows = 8, cols = 8;

function createTable() {

  var table = document.createElement("table");
  for (var i = 0; i <= rows+1; i++) {
    var row = document.createElement("tr");
    table.appendChild(row);
    for (var j = 0; i <= cols+1; j++) {
      var col = document.createElement("td");
      col.content = "1";
      if (j % 2 === 0) {
        col.classList.add("black");
      } else {
        col.classList.add("white");
      }
      row.appendChild(col);
    }
  }
  return table;
}

document.body.appendChild(createTable());
