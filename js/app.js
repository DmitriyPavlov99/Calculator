//Доступ к кнопке очистки
const clearBtn = document.querySelector("#clear");
//Доступ к инпуту ввода и вывода результата
const inputResult = document.querySelector("#result");
//Доступ ко всем кнопкам
const buttons = document.querySelectorAll('[type="button"]');
//Доступ к кнопкам с цифрами
const btnsNum = document.querySelectorAll('[data-num="num"]');
//Доступ к кнопке обчисления и вывода результата
const btnCalculation = document.querySelector('[data-num="="]');

//Ховер анимация на все кнопки
buttons.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.cssText = "background-color: grey;";
  });
  item.addEventListener("mouseleave", () => {
    item.style.cssText = "background-color: slateblue;";
  });
});

//Ивенты на кнопки:

//Ивент на кнопку очистку
clearBtn.addEventListener("click", clear);

//Ивент на кнопки цифр и операторов на добавление в форму ввода
btnsNum.forEach((elements) => {
  elements.addEventListener("click", addingToInput);
});

btnCalculation.addEventListener("click", calculation);

//функция на кнопку очистки
function clear(event) {
  event.preventDefault();
  inputResult.value = "";
}
// функция на добавление значений в форму ввода
function addingToInput(event) {
  console.log(event.target.value);
  if (
    event.target.value == "0" ||
    event.target.value == "1" ||
    event.target.value == "2" ||
    event.target.value == "3" ||
    event.target.value == "4" ||
    event.target.value == "5" ||
    event.target.value == "6" ||
    event.target.value == "7" ||
    event.target.value == "8" ||
    event.target.value == "9" ||
    event.target.value == "+" ||
    event.target.value == "-" ||
    event.target.value == "*" ||
    event.target.value == "/" ||
    event.target.value == "."
  )
    inputResult.value += event.target.value;
}
//Функция считывания
function calculation() {
  return (inputResult.value = eval(inputResult.value.toString()));
}
