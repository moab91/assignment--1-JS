///(1)///
var enterNumber=window.prompt("enter number")
console.log(enterNumber)

///2///
var number=window.prompt("divide")
if(number % 3=== 0 && number % 4=== 0){
    console.log("Yes")
}
else{
    console.log("No")
}

///3///
var num1, num2;
num1 = window.prompt("Input the First integer");
num2 = window.prompt("Input the second integer");
if (num1 > num2) {
    console.log( + num1 );
  } else if (num2 > num1) {
    console.log( + num2);
  }

  ///4///
  var num1;
  num1 = window.prompt("Input integer");
  if(num1 > 0) {
    console.log("positive");
  }
  else if(num1<0){
    console.log("negative");
  }

  ///5///
  var num1,num2,num3;
  num1 = window.prompt("Input the First integer");
num2 = window.prompt("Input the second integer");
num3 =window.prompt("Input the thrid integer");
if (num1>num2 && num1>num3) {
  console.log("max element=" +num1)
}
else if(num2>num1 && num2>num3){
  console.log("max element=" +num2)
}
else{
  console.log("max element=" +num3)
  }

  if (num1<num2  && num1<num3) {
    console.log("min element=" +num1)
  }
  else if(num2<num1  && num2<num3){
    console.log("min element="+num2)
  }
  else{
    console.log("min element="+num3)
  }
  
  ///6///
  var number
  number=window.prompt("Input integer")
  if (number % 2 == 0) {
    console.log("even")
  }
  else {
    console.log("odd");
}

///7///
var character
character=window.prompt("Input character")
if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
  console.log("vowel")
}
else{
  console.log("Consonant")
}

///8///
var x
x=window.prompt("Input integer")
for ( i = 1; i <=x ; i++) {
  console.log(i);
}

///9///
var number
number=window.prompt("Input integer")
for (let i = 1; i <=12; i++){
  var result = number * i;
  console.log(`${number} * ${i} = ${result}`);
}

///10///
var number
  number=window.prompt("Input integer")
  for (i=1;i<=number;i++){
    if(i%2==0){
      console.log(i)
    }
  }

  ///11///
  var num1,num2;
  num1 = window.prompt("Input the First integer");
num2 = window.prompt("Input the second integer");
  var result=num1**num2
  console.log(`${num1} ** ${num2} = ${result}`)

  ///12///
  
 var m1= window.prompt("Input the 1 integer");
 var m2= window.prompt("Input the 2 integer");
 var m3=window.prompt("Input the 3 integer");
 var m4= window.prompt("Input the 4 integer");
 var m5= window.prompt("Input the 5 integer")
var result= m1 + m2 + m3 + m4 + m5  ;
var Average=result/5;
var Percentage=Average*100/100;
console.log("Total marks ="+result)
console.log("Average Marks ="+Average)
console.log("Percentage ="+Percentage)

///13///
var month
month=window.prompt("input month number")
if(month==="1" || month==="3"|| month==="5"|| month==="7"|| month==="8"|| month==="10"|| month==="12"){
  console.log("Days in Month:31")
}
if(month==="4" || month==="6"|| month==="9"|| month==="11"){
  console.log("Days in Month:30")
}
if(month==="2"){
  console.log("Days in Month:28")
}

///14///
var Physics, Chemistry, Biology, Mathematics , Computer
Physics=window.prompt("input marks Physics");
Chemistry=window.prompt("input marks Chemistry ");
Biology=window.prompt("input marks Biology");
Mathematics=window.prompt("input marks Mathematics ");
Computer=window.prompt("input marks Computer");


var percentage=(Physics+Chemistry+Biology+Mathematics+Computer/(5*100))*100;
console.log(" percentage="+percentage);

if(percentage>=90){
  console.log("Grade A")
}
else if(percentage>=80){
  console.log("Grade B")
}

else if(percentage>=70){
  console.log("Grade C")
}
else if(percentage>=60){
  console.log("Grade D")
}
else if(percentage>=40){
  console.log("Grade E")
}
else {
  console.log("Grade F")
}

//******************************** Using switch case*******************************//


///15///
var month
month=window.prompt("input month number");

switch(month)
    {
        case "4":
        case "6":
        case "9":
        case "11":
          console.log("Days in Month:30");
          break;
    
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
          console.log("Days in Month:31");
          break;
    
        case "2":
          console.log("Days in Month:28");
          break;
    
        default:
          days = 0;
          console.log ("Invalid input! Please enter month number between 1-12");
          break;
        }

    ///16///
    var character
    character=window.prompt("Input character")
    switch (character) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        console.log("vowel");
          break;
      default:
        console.log("Consonant");
  }   

  ///17///
  var num1, num2;
num1 = window.prompt("Input num1 integer");
num2 = window.prompt("Input num2 integer");

switch (true) {
    case (num1 > num2):
      console.log( + num1 );
      break;
      case  (num2 > num1):
        console.log( + num2);
        break;
  }

  ///18///
  var number
  number=window.prompt("Input number")
  
switch (true) {
  case (number % 2 == 0):
    console.log("even")
    break;
  default:
    console.log("odd");
    break;
}

///19///
var num;
  num= window.prompt("Input number");
  
  switch (true) {
    case(num > 0):
    console.log("positive");
      break;

      case(num<0):
      console.log("negative");
      break;

    default:
      console.log("zero");
      break;
  }

  ///20///
  
var result;

var operator =window. prompt('Enter operator ( either +, -, * or / ): ');

var number1 = window.prompt('Enter first number: ');
var number2 = window.prompt('Enter second number: ');

switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}
          
///END///
    