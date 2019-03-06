var but0 = document.getElementById('but0')
var but1 = document.getElementById('but1')
var but2 = document.getElementById('but2')
var but3 = document.getElementById('but3')
var but4 = document.getElementById('but4')
var but5 = document.getElementById('but5')
var but6 = document.getElementById('but6')
var but7 = document.getElementById('but7')
var but8 = document.getElementById('but8')
var but9 = document.getElementById('but9')
var but10 = document.getElementById('but10')
var but11 = document.getElementById('but11')
var but12 = document.getElementById('but12')
var but13 = document.getElementById('but13')
var but14 = document.getElementById('but14')
var but15 = document.getElementById('but15')
var answer = document.getElementById('answer')



var integerArray = [but0, but1, but2, but3, but4, but5, but6, but7, but8, but9]
var modifierArray = [but10, but11, but12, but13]
var firstnum = document.getElementById('firstnum')
var modifier = document.getElementById('modifier')
var secondnum = document.getElementById('secondnum')
var firstArray = []
var secondArray = []

var i = 0

var turn = 0

function buttonsint() {
  for (i = 0; i < integerArray.length; i++) {
    integerArray[i].addEventListener('click', function() {
      if (turn % 2 == 0) {
      firstArray.push(this.innerHTML) 
       firstnum.innerHTML = firstArray.join("")
      }
       else {
       secondArray.push(this.innerHTML)
       secondnum.innerHTML = secondArray.join("")
      }
    })
  }
}

function buttonsmod() {
  for (i = 0; i < modifierArray.length; i++) {
    modifierArray[i].addEventListener('click', function() {
      if (firstArray == 0) {
        alert('You Must Select a number first')
      }
      else {
        modifier.innerHTML = this.innerHTML
        turn++
      }
    })
  }
}

but14.addEventListener('click', function() {
  doMath()});

but15.addEventListener('click', function() {
  clear()});

function doMath() {
  num1 = firstArray.join("")
  num2 = secondArray.join("")
  operator = modifier.innerHTML

  switch(operator) {
    case "+":
    answer.innerHTML = parseFloat(num1) + parseFloat(num2)
    break;
    case "-":
    answer.innerHTML = parseFloat(num1) - parseFloat(num2)
    break;
    case "*":
    answer.innerHTML = parseFloat(num1) * parseFloat(num2)
    break;
    case "/":
      if (num2 == 0) {
        alert("You can't divide by 0, DUMMY")
        num = null
      }
        else {
    answer.innerHTML = parseFloat(num1) / parseFloat(num2)
      }
    break;
  }
}

function clear() {
  turn = 0
  firstArray = []
  secondArray = []
  answer.innerHTML = "Answer"
  modifier.innerHTML = "Operator"
  firstnum.innerHTML = "First Number"
  secondnum.innerHTML = "Second Number"
}
buttonsint()
buttonsmod()

