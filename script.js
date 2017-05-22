//Find and display total sum of numbers from 1 to 3;
/*function total_sum_between_numbers(first_num,second_num,total_sum=0){
  while (first_num <=second_num) {
    total_sum +=first_num;
    first_num++;
  }
console.log(total_sum)
}
total_sum_between_numbers(1,3)

//Find and display total sum of numbers from 20 to 220;
function total_sum_between_numbers(first_num,second_num,total_sum=0){
  while (first_num <=second_num) {
    total_sum +=first_num;
    first_num++;
  }
console.log(total_sum)
}
total_sum_between_numbers(20,220)

//Display even numbers from 1 to 20 by using for loop.
// With using ‘continue’
function even_numbers_with_comtinue(num){
  for (var i=0;i<=num;i++) {
    if(i%2==1) continue;
      console.log(i);
 }
}

even_numbers_with_comtinue(20)

//Without using ‘continue’ 
function even_numbers(num){
   for (var i=1;i<=num;i++) {
    if(i%2==0)
      console.log(i);
  }
}

even_numbers(20)

//Display odd numbers from 10 to 30 by using ‘while’ loop.
function odd_numbers_in_range(first_num,second_num){
  while(first_num <= second_num){
  if (first_num%2 == 0)
    console.log(first_num);
  first_num++;
  }
}
odd_numbers_in_range(10,30)

//Display numbers from 1 to 15 using ‘for’ loop, once num of iteration is equal the num of month of your birthday then stop execution of loop
function print_nums_until_my_bd(first_num,second_num,mont_of_my_birth){
  for (;first_num<=second_num;first_num++){
    console.log(first_num);
    if (first_num == mont_of_my_birth)
      break;
  }
}

print_nums_until_my_bd(1,15,4)

//Rewrite code from using ‘for’ to using ‘while’

function changed_for_to_while(first_num,last_num){
  while (first_num<last_num) {
    console.log(`number ${first_num}  =)`);
    first_num++;
  }
}
changed_for_to_while(0,5)*/

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

/*
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
symbol_to_print("#",8)*/
