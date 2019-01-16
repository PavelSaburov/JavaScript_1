var resp,
  money = 0,
  answer,
  questionCount = 0;
alert('Добро подаловать в игру "Кто хочет стать миллионером"\nНажмите "ОК" как будете готовы');
while (questionCount < questions.length) {
  do {
    answer = getAnswer(questionCount);
  } while (!isAnswer(answer));
  if (answer === 5 || questionCount === questions.length-1) {
    alert("Поздравляем. Вы выиграли: " + money);
    break;
  } else if (answer === questions[questionCount].trueAnsw) {
    money += questions[questionCount].bonus;
  } else {
    alert("Увы. Вы проиграли");
    break;
  }
  questionCount++;
}

//функция проверки корректности ответа
function isAnswer(resp) {
    if (isNaN(resp) || !isFinite(resp)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (resp < 1 || resp > 5) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
}

//функция возврата ответа
function getAnswer (numQuestion) {
  resp = +prompt("Внимание вопрос!\n" + questions[numQuestion].question + "Варианты ответов:\n"
         + questions[numQuestion].answ1 + questions[numQuestion].answ2 + questions[numQuestion].answ3
         + questions[numQuestion].answ4 + "5: взять деньги");
  return resp;
}