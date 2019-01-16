var resp,
  progress = [],
  money = 0,
  answer,
  questionCount = 0;
alert('Добро подаловать в игру "Кто хочет стать миллионером"\nНажмите "ОК" как будете готовы');
while (questionCount < questions.length) {
  answer = getAnswer(questionCount);

  questionCount++;
}

//функция проверки корректности ответа
function isAnswer(resp) {
    if (isNaN(resp) || !isFinite(resp)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (resp < 1 || resp > 4) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
}

//функция возврата ответа
function getAnswer (numQuestion) {
  resp = +prompt("Внимание вопрос!\n" + questions[numQuestion].question + "Варианты ответов:\n"
         + questions[numQuestion].answ1 + questions[numQuestion].answ2 + questions[numQuestion].answ3
         + questions[numQuestion].answ4 + "0: взять деньги");
  return resp;
}