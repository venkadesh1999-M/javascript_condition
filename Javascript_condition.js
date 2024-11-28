// let marks = 
//     {
//       maths:81,
//       Physics:51,
//       chemistry:71,
//       computer_science:84
// }

// if ((marks.maths >70 && marks.Physics > 70 && marks.chemistry > 70)||(marks.maths>80 && marks.computer_science >80)){
//   console.log("You are Eligible engineering College")
// }

// else{
//   console.log("You Are Not Eligible")
// }

let marks = 
    {
  tamil : 80,
  english:80,
  maths:81,
  Physics:81,
  chemistry:71,
  computer_science:84
  }

let  total = marks.tamil+marks.english+marks.maths+marks.Physics+marks.chemistry+marks.computer_science

let value = total/5

console.log(value)
if(value >= 90){
  console.log("Grade A")
 
}
else if (value >= 80){
  console.log("Grade B")
}
else if (value >= 70){
  console.log("Grade C")
}
else if (value >= 60){
  console.log("Grade D")
}
else if (value >= 50){
  console.log("Grade E")
}
else if (value >= 40){
  console.log("Grade F")
}
else{
  console.log("You are Fail")
}