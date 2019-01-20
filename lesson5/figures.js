
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
function Figure (name, classColor, avatar) {
  this.name = name;
  this.classColor = classColor;
  this.avatar = avatar;

}

gameField[1][1] = new Figure("л", "blackFigure", "♜");
gameField[1][2] = new Figure("к", "blackFigure", "♞");
gameField[1][3] = new Figure("с", "blackFigure", "♝");
gameField[1][4] = new Figure("К", "blackFigure", "♚");
gameField[1][5] = new Figure("ф", "blackFigure", "♛");
gameField[1][6] = new Figure("с", "blackFigure", "♝");
gameField[1][7] = new Figure("к", "blackFigure", "♞");
gameField[1][8] = new Figure("л", "blackFigure", "♜");

gameField[2][1] = new Figure("п", "blackFigure", "♟");
gameField[2][2] = new Figure("п", "blackFigure", "♟");
gameField[2][3] = new Figure("п", "blackFigure", "♟");
gameField[2][4] = new Figure("п", "blackFigure", "♟");
gameField[2][5] = new Figure("п", "blackFigure", "♟");
gameField[2][6] = new Figure("п", "blackFigure", "♟");
gameField[2][7] = new Figure("п", "blackFigure", "♟");
gameField[2][8] = new Figure("п", "blackFigure", "♟");

gameField[7][1] = new Figure("п", "whiteFigure", "♟");
gameField[7][2] = new Figure("п", "whiteFigure", "♟");
gameField[7][3] = new Figure("п", "whiteFigure", "♟");
gameField[7][4] = new Figure("п", "whiteFigure", "♟");
gameField[7][5] = new Figure("п", "whiteFigure", "♟");
gameField[7][6] = new Figure("п", "whiteFigure", "♟");
gameField[7][7] = new Figure("п", "whiteFigure", "♟");
gameField[7][8] = new Figure("п", "whiteFigure", "♟");

gameField[8][1] = new Figure("л", "whiteFigure", "♜");
gameField[8][2] = new Figure("к", "whiteFigure", "♞");
gameField[8][3] = new Figure("с", "whiteFigure", "♝");
gameField[8][4] = new Figure("К", "whiteFigure", "♚");
gameField[8][5] = new Figure("ф", "whiteFigure", "♛");
gameField[8][6] = new Figure("с", "whiteFigure", "♝");
gameField[8][7] = new Figure("к", "whiteFigure", "♞");
gameField[8][8] = new Figure("л", "whiteFigure", "♜");

