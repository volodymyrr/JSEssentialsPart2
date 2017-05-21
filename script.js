//Find and display total sum of numbers from 1 to 3;
/*var first_num = 1;
var second_num = 3;
var total_num =0;
while (first_num <=second_num) {
    total_num +=first_num;
    first_num++;
}
console.log(total_num)

//Find and display total sum of numbers from 20 to 220;
var first_num = 20;
var second_num = 220;
var total_num =0;
while (first_num <=second_num) {
    total_num +=first_num;
    first_num++;
}
console.log(total_num)

//Display even numbers from 1 to 20 by using for loop.
// With using ‘continue’
for (var i=1;i<=20;i++) {
  if(i%2==1) continue;
    console.log(i);
 }

//Without using ‘continue’ 
for (var i=1;i<=20;i++) {
  if(i%2==0)
    console.log(i);
 }

//Display odd numbers from 10 to 30 by using ‘while’ loop.
var first_num = 10;
var second_num = 30;
while(first_num <= second_num){
  if (first_num%2 == 0)
    console.log(first_num);
  first_num++;
}

//Display numbers from 1 to 15 using ‘for’ loop, once num of iteration is equal the num of month of your birthday then stop execution of loop
var first_num = 1;
var second_num = 15;
var mont_of_my_birth = 4;
for (;first_num<=second_num;first_num++){
  if (first_num == mont_of_my_birth)
    break;
  console.log(first_num);
}

//Rewrite code from using ‘for’ to using ‘while’
var i=0;
while (i<5) {
  console.log(`number ${i}  =)`);
  i++;
}*/

//Write code which will ask user (prompt ) to put number greater than 100, repeat prompt until user put required number, then display result of prompt
//using ‘while’
function number_greater_than100(){
  var greater_than100_num = prompt("Please input number greater than 100: ");
      while(greater_than100_num <=100) {
        number_greater_than100();
        break;
      }
      if (greater_than100_num > 100)
          alert(greater_than100_num);
}
number_greater_than100();

/*var greater_than100_num = 0;
  while(greater_than100_num <=100) {
      greater_than100_num = prompt("Please input number greater than 100: ");
      if (greater_than100_num > 100)
        alert(greater_than100_num);
  }

//using ‘do while’
var greater_than100_num=0;
do {
  greater_than100_num = prompt("Please input number greater than 100: ");
  if (greater_than100_num > 100)
	alert(greater_than100_num);
} while (greater_than100_num<=100);

//Show in console using for
function symbol_to_print(symbol,num,list=[]){
  for (i=0;i<num;i++){
    list += symbol;
    console.log(list)
  }
}
symbol_to_print("#",8);*/