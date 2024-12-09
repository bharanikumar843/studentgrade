document.write("<h4>Student Grade System</h4>")
var id =prompt("Enter student ID", id)
var id= 123
var isname= "bharani"
var mark1=95;
var mark2=92;
var mark3=86;
var mark4=91;
var mark5=89;
var total=mark1+mark2+mark3+mark4+mark5;
var percentage=(total*100)/500.0;
document.write("id=:"+id+"<br>")
document.write("name=:"+isname+"<br>")
document.write("total=:"+total+"<br>")
document.write("percentage=:"+percentage+"<br>")

var num1 = prompt("Enter marks 1")
var num2 = prompt("Enter marks 2!")
var num3= prompt("Enter marks 3!")
var num4 = prompt("Enter marks 4!")
var num5 = prompt("Enter marks 5!")

if (percentage > 90) {
    document.write("Grade:A 😍");
    } 
    else if (percentage > 80 && percentage <= 90) {
    document.write("Grade:B 🥰");
    } 
    else if (percentage > 70 && percentage <= 80) {
        document.write("Grade:C 😊");
    } 
    else if (percentage > 60 && percentage <= 70) {
        document.write("Grade:D 😊");
    } 
    else if (percentage > 50 && percentage <= 60) {
        document.write("Grade:E 😖");
    } 
    else {
        document.write("Fail😥");
    }
