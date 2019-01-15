var event, ok, progress = [];

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
        if (ok) {
          progress.push({
            desc: "" + works.a00 + works.a1 + works.a2 + "-1 - Выход из игры",
            case: event
          });
        }
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
              if (ok) {
                progress.push({
                  desc: "" + works.b00 + works.b1 + works.b2 + "-1 - Выход из игры",
                  case: event
                });
              }
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                      if (ok) {
                        progress.push({
                          desc: "" + works.d00 + works.d1 + works.d2 + "-1 - Выход из игры",
                          case: event
                        });
                      }
                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                      if (ok) {
                        progress.push({
                          desc: "" + works.d00 + works.d1 + works.d2 + "-1 - Выход из игры",
                          case: event
                        });
                      }
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
              if (ok) {
                progress.push({
                  desc: "" + works.c00 + works.c1 + works.c2 + "-1 - Выход из игры",
                  case: event
                });
              }
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                      if (ok) {
                        progress.push({
                          desc: "" + works.d00 + works.d1 + works.d2 + "-1 - Выход из игры",
                          case: event
                        });
                      }
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                      if (ok) {
                        progress.push({
                          desc: "" + works.d00 + works.d1 + works.d2 + "-1 - Выход из игры",
                          case: event
                        });
                      }
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
if (progress.length > 0) {
  var resp = +prompt("Если хотите просмотреть свой ход введите его номер от 1 по " + progress.length);
  ok = isAnswer(progress.length+1, resp);
  if (ok) {
    confirm("Описание хода:\n" + progress[resp-1].desc + "\nВы выбрали вариант номер: " + progress[resp-1].case);
  } else {
    confirm("Некорректные данные");
  }
}


//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}