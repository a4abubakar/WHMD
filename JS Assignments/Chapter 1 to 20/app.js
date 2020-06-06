//////////////chapter 1/////////////////

//1.
alert("Welcome!");

//2.
alert("Error! Please enter a valid password");

//3.
alert("Welcome to JS Land...\nHappy Coding!");

//4.
alert("Happy Coding!", alert("Welcome to JS Land..."));

//5.
alert("Hello... I can run JS through my web browser's console");

//////////////////////////////////////////

//////////////chapter 2//////////////////

//1.
var username;

//2.
var myName = "Muhammad Aqib";

//3.
var message;
message = "Hello World";
alert(message);

//4.
var name = "Aqib";
var age = "18 years old";
var insitute = "Saylani";
var course = "Web and Mobile Development";

alert(name);
alert(age);
alert(insitute);
alert(course);

//5.
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

//6.
var children = 2;
var parther = "ABC";
var country = "USA";
var job = "Software Developer";

alert("You will be a " + job + " in " + country + ", and married to " + parther + " with " + children + " kids.");

//7.
var email = "m.aqibayub@gmail.com";
alert("My email address is " + email);

//8.
var book = "'A smarter way to learn JavaScript'";
alert("I am try to learn from the book " + book);

//9.
var name = "Aqib";
var age = "18 years old";
var insitute = "Saylani";
var course = "Web and Mobile Development";

alert("My name is " + name);
alert("I am " + age);
alert("I study in " + insitute);
alert("I take " + course + " classes");

//10.
document.write("Yay! I can write HTML content through JavaScript");

//////////////////////////////////////////

//////////////chapter 3//////////////////

//1.
var age = 18;
alert("I am " + age + " years old.");

//2.
var $times = 21;
alert("You have visited this page " + $times + " times.");

//3.
var birthYear = 1998;
document.write("My birth year is " + birthYear + "<br/>");
document.write("Data type of my declared variable is number.");

//4.
var name = "Sami Khan";
var title = "T-Shirts";
var quantity = 3;

document.write(name + " ordered " + quantity + " " + title + " on XYZ Clothing store" + "<br/>");
document.write("Data type of my declared variable is number");

//////////////////////////////////////////

//////////////chapter 4//////////////////

//1.
var $one, $two, $three;

//2.
//Legal variables
var firstName, last4nAmEs, $nick_name, AK47, simple;

//Illegal variables
var first Name, 4cars, (X - Y.Z), class, function;

//3.
document.write(`<h1>Rules for naming JS variables</h1>
<p>
Variable names can only contain letters, numbers, dollar signs and underscores.
</p>
<p>
Variables must begin with a letter, dollar sign or underscore.
</p>
<p>
Variable names are case sensitive.
</p>
<p>
Variable names should not be JS keywords.
</p>`)

//////////////////////////////////////////

//////////////chapter 5-7//////////////////

//1.
var num1 = 18;
var num2 = 7;
var sum = num1 + num2;
alert("The sum of " + num1 + " and " + num2 + " is " + sum);

//2.
var num1 = 18;
var num2 = 5;
var subtract = num1 - num2;
var product = num1 * num2;
var divide = num1 / num2;
var modulus = num1 % num2;

alert("Result of subtracting " + num2 + " from " + num1 + " is " + subtract); //Subtraction
alert("Result of multiplying " + num1 + " and " + num2 + " is " + product);   //Multiplication
alert("Result of dividing " + num1 + " by " + num2 + " is " + divide);        //Division
alert("Remainder of dividing " + num1 + " by " + num2 + " is " + modulus);    //Modulus

//3.
var num;
document.write("Value after variable declaration is ", num + "<br/>");
num = 3;
document.write("Initial value: ", num + "<br/>");
num++;
document.write("Value after increment is ", num + "<br/>");
num += 7;
document.write("Value after adding 7 is ", num + "<br/>");
num--;
document.write("Value after decrement is ", num + "<br/>");
num %= 3;
document.write("The remainder is ", num + "<br/>");

//4.
var ticket = 600;
document.write("The total cost of buying 5 tickets to a movie is " + (ticket * 5) + " PKR.");

//5.
var num = 7;
document.write("Multiplication table of " + num + "<br/><br/>")
for (var x = 1; x <= 10; x++) {
    document.write(num + " x " + x + " = " + num * x + "<br/>")
}

//6.
var celsius = 44;
var toF = (celsius * 9 / 5) + 32;
var fahrenheit = 77;
var toC = (fahrenheit - 32) * 5 / 9;

document.write(celsius + " °C is " + toF + " °F" + "<br/>");
document.write(fahrenheit + " °F is " + toC + " °C");

//7.
var price1 = 700;
var price2 = 450;
var qty1 = 4;
var qty2 = 6;
var shipping = 250;
var total = (price1 * qty1) + (price2 * qty2) + shipping;

document.write("Price of Item 1 = " + price1 + "<br/>");
document.write("Quantity of Item 1 = " + qty1 + "<br/>");
document.write("Price of Item 2 = " + price2 + "<br/>");
document.write("Quantity of Item 2 = " + qty2 + "<br/>");
document.write("Shipping charges = " + shipping + "<br/><br/>");
document.write("Total cost of your order is " + total + " PKR.");

//8.
var totalMarks = 1100;
var obtainedMarks = 792;
var percentage = obtainedMarks * 100 / totalMarks;

document.write("Total Marks = " + totalMarks + "<br/>");
document.write("Obtained Marks = " + obtainedMarks + "<br/>");
document.write("Percentage = " + percentage + "%");

//9.
var dollar = 116;
var riyal = 30;
var totalPKR = (dollar * 10) + (riyal * 25);
document.write("Total Currency in PKR= Rs " + totalPKR)

//10.
var num = 6;
num = ((num + 5) * 10) / 2;
alert(num);

//////////////////////////////////////////

//////////////chapter 8-11//////////////////

//1.
var name = prompt("Please enter your name..");
alert("Hi, " + name);

//2.
var num = prompt("Enter a number to its multiplication table..");

document.write("Multiplication table of " + num + "<br/><br/>")
for (var x = 1; x <= 10; x++) {
    document.write(num + " x " + x + " = " + num * x + "<br/>")
}

//3.
var city = prompt("Please enter your city..");
if (city === "Karachi" || city === "karachi") {
    alert("Welcome to city of lights.");
}

//4.
var gender = prompt("Please enter your gender..");
if (gender == "male") {
    alert("Good Morning Sir.");
}
else if (gender == "female") {
    alert("Good Morning Ma’am.");
}

//5.
var color = prompt("Enter the color of traffic signal..");
if (color == "red") {
    alert("Vehicles must stop!");
}
else if (color == "yellow") {
    alert("Vehicles should get ready to move!");
}
else if (color == "green") {
    alert("Vehicles can move now!");
}

//6.
var maxAge = prompt("Enter the Maximum age..");
var age = prompt("Enter the your current age..");
if (age && age <= maxAge) {
    alert("You are welcome!");
}

//7.
var fuel = prompt("Enter the remaining fuel of your car..(in litres)");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car!");
}

//8.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

//9.
var english = parseInt(prompt("Enter the marks of English.."));
var math = parseInt(prompt("Enter the marks of Maths.."));
var urdu = parseInt(prompt("Enter the marks of Urdu.."));
var totalMarks = parseInt(prompt("Enter the Total marks.."));
var obtainedMarks = english + math + urdu;
var percentage = obtainedMarks * 100 / totalMarks;
var grade, remarks;

if (percentage >= 80) {
    grade = "A-One";
    remarks = "Excellent"
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good"
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve"
}
else {
    grade = "Fail";
    remarks = "Sorry"
}

document.write("Total Marks = " + totalMarks + "<br/>");
document.write("Marks Obtained = " + obtainedMarks + "<br/>");
document.write("Percentage = " + percentage + "%" + "<br/>");
document.write("Grade = " + grade + "<br/>");
document.write("Remarks : " + remarks + "<br/>")

//10.
var item1 = prompt("Enter the name of Item 1..");
var item2 = prompt("Enter the name of Item 2..");
var price1 = parseInt(prompt("Enter the price of Item 1.."));
var price2 = parseInt(prompt("Enter the price of Item 2.."));
var qty1 = parseInt(prompt("Enter the quantity of Item 1.."));
var qty2 = parseInt(prompt("Enter the quantity of Item 2.."));
var shipping = parseInt(prompt("Enter the shipping charges.."));
var total = (price1 * qty1) + (price2 * qty2) + shipping;

document.write("Price of " + item1 + " is " + price1 + "<br/>");
document.write("Quantity of " + item1 + " is " + qty1 + "<br/>");
document.write("Price of " + item2 + " is " + price2 + "<br/>");
document.write("Quantity of " + item2 + " is " + qty2 + "<br/><br/>");
document.write("Shipping charges = " + shipping + "<br/><br/>");
document.write("Total cost of your order is " + total + " PKR.");

if (total >= 2000) {
    var discount = total - (total * 10 / 100);
    document.write("Discounted Price is " + discount + " PKR.");
}

//11.
var secretNumber = 4;
var num = parseInt(prompt("Guess a number ranging from 1 to 10.."));

if (num == secretNumber) {
    alert("Bingo! Correct answer.")
}
else if (num == secretNumber + 1 || num == secretNumber - 1) {
    alert("Close enough to the correct answer");
}
else {
    alert("Nope..");
}

//12.
var num = parseInt(prompt("Enter a number.."));

if (num % 3 === 0) {
    alert(num + " is divisible by 3")
}
else {
    alert(num + " is not divisible by 3")
}

//13.
var teamA = prompt("Enter the name of first team A..");
var teamB = prompt("Enter the name of first team B..");
var teamA_score = prompt("Enter the score of " + teamA);
var teamB_score = prompt("Enter the score of " + teamB);

if (teamA_score > teamB_score) {
    alert(teamA + " has won the game.");
}
else if (teamA_score < teamB_score) {
    alert(teamB + " has won the game.");
}
else {
    alert("Its a tie!");
}

//14.
var var1 = false;
var var2 = 453;
var var3 = "Computer";
alert(var1 + " is a " + typeof var1);
alert(var2 + " is a " + typeof var2);
alert(var3 + " is a " + typeof var3);

//15.
var num = parseInt(prompt("Enter a number.."));

if (num % 2 === 0) {
    alert(num + " is a even number.");
}
else {
    alert(num + " is a odd number.");
}

//16.
var temperature = parseInt(prompt("Enter a number.."));

if (temperature > 40) {
    alert("It is too hot outside.");
}
else if (temperature > 30) {
    alert("The Weather today is Normal.");
}
else if (temperature > 20) {
    alert("Today’s Weather is cool.");
}
else {
    alert("OMG! Today’s weather is so Cool.");
}

//17.
var num1 = parseInt(prompt("Enter the first number.."));
var num2 = parseInt(prompt("Enter the second number.."));
var operation = prompt("What do you want? e.g (+, -, *, /, %)");

if (operation == "+") {
    alert(num1 + "+" + num2 + " = " + (num1 + num2));
}
else if (operation == "-") {
    alert(num1 + "-" + num2 + " = " + (num1 - num2));
}
else if (operation == "*") {
    alert(num1 + "x" + num2 + " = " + (num1 * num2));
}
else if (operation == "/") {
    alert(num1 + "÷" + num2 + " = " + (num1 / num2));
}
else if (operation == "%") {
    alert(num1 + "%" + num2 + " = " + (num1 % num2));
}
else {
    alert("Oops! Something went wrong!");
}

//18.
var day = prompt("Enter today\'s day");

if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
    alert("It’s a week day");
}
else if (day == "Saturday") {
    alert("It’s weekend");
}
else if (day == "Sunday") {
    alert("Yay! It’s a holiday");
}
else {
    alert("Error! Please recheck the spelling..");
}

//19.
var score = prompt("Enter your score..");

if (score > 50) {
    alert("You are passed!");
}
else {
    alert("Try again!");
}

//20.
var a = parseInt(prompt("Enter the first number.."));
var b = parseInt(prompt("Enter the second number.."));
if (a > b) {
    alert("The greater number of " + a + " and " + b + " is " + a);
}
else if (a < b) {
    alert("The greater number of " + a + " and " + b + " is " + b);
}
else if (a === b) {
    alert(a + " and " + b + " are equal.");
}

//21.
var lang = prompt("In which language do want to translate 'Hello World'? (es, de, en)");
if (lang == "es") {
    alert("Hola Mundo");
}
else if (lang == "de") {
    alert("Hallo Welt");
}
else {
    alert("Hello World");
}

//22.
var num = parseInt(prompt("Enter a postive or number negative.."));
if (num > 0) {
    alert(num + " is a postive number.");
}
else if (num < 0) {
    alert(num + " is a negative number.");
}
else if (num === 0) {
    alert(num + " is neither positive nor negative.");
}

//23.
var num = parseInt(prompt("Please enter a number.."));
var noun = prompt("Please enter a noun..");

if (num > 1) {
    alert(num + " " + noun + "s");
}
else {
    alert(num + " " + noun);
}

//////////////////////////////////////////

//////////////chapter 12-13///////////////

//1.
var num = parseInt(prompt("Enter a number.."));
if (num % 3 === 0) {
    alert(num + " is divisible by 3")
}
else {
    alert(num + " is not divisible by 3")
}

//2.
var num = parseInt(prompt("Enter a number.."));
if (num % 2 === 0) {
    alert(num + " is a even number.");
}
else {
    alert(num + " is a odd number.");
}

//3.
var age = parseInt(prompt("Enter your age.."));
if (age > 18) {
    alert("Old enough");
}
else {
    alert("Too young");
}

//4.
var name = prompt("Hi, I am Aqib. Whats your name?");
if (name == "Aqib") {
    alert("Hehe, We both are Aqib :)");
}

//5.
var num = prompt("Enter a number..");
switch (num % 3) {
    case 0:
        alert(num + " is divisible by 3");
        break;
    default:
        alert(num + " is not divisible by 3");
}

//6.
var user = prompt("Enter a number..");
var code = user.charCodeAt(0);
if (code >= 65 && code <= 90) {
    alert(user + " is a uppercase character");
}
else if (code >= 97 && code <= 122) {
    alert(user + " is a lowercase character");
}
else if (isNaN(user) === false && user) {
    alert(user + " is a number.");
}
else {
    alert(user + " is a not number, uppercase letter or lower case letter.");
}

//7.
var num1 = parseInt(prompt("Enter the first number.."));
var num2 = parseInt(prompt("Enter the second number.."));
var operation = prompt("What do you want? e.g (+, -, *, /, %)");

switch (operation) {
    case "+":
        alert(num1 + " + " + num2 + " = " + (num1 + num2));
        break;
    case "-":
        alert(num1 + " - " + num2 + " = " + (num1 - num2));
        break;
    case "*":
        alert(num1 + " x " + num2 + " = " + (num1 * num2));
        break;
    case "/":
        alert(num1 + " ÷ " + num2 + " = " + (num1 / num2));
        break;
    case "%":
        alert(num1 + " % " + num2 + " = " + (num1 % num2));
        break;
    default:
        alert("Oops! Something went wrong!");
}

//8.
var time = prompt("Please enter time in 24 hour format.. (e.g. 1650)");

if (time >= 0000 && time < 1200) {
    alert("Good morning!")
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!")
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening!")
}
else if (time >= 2100 && time < 2359) {
    alert("Good night!")
}
else {
    alert("Invalid time!")
}

//9.
var year = prompt("Please enter year in YYYY format..");
if (year % 4 === 0) {
    alert(year + " is a leap year.")
}
else {
    alert(year + " is not a leap year.")
}

//10.
var pass1 = "12345";
var pass2 = prompt("Please enter password.");

if (pass2) {
    if (pass1 == pass2) {
        alert("Correct! The password you entered matches the original password")
    }
    else {
        alert("Incorrect password")
    }
}
else {
    alert("Please enter your password.");
}

//11.
var firstName = "Ali";
if (firstName === "Fahad") {
    document.write("Hello Fahad!");
}
else {
    document.write("You are not Fahad")
}

//12.
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

//13.
var a = parseInt(prompt("Enter the first number.."));
var b = parseInt(prompt("Enter the second number.."));
if (a > b) {
    alert(a + " is larger");
}
else if (a < b) {
    alert(b + " is larger");
}
else if (a === b && a && b) {
    alert("Both are equal.");
}

//14.
var num = parseInt(prompt("Enter a postive or number negative.."));
if (num > 0) {
    alert(num + " is a postive number.");
}
else if (num < 0) {
    alert(num + " is a negative number.");
}
else if (num === 0) {
    alert(num + " is neither positive nor negative.");
}

//15.
var hour = prompt("Please enter the current hour in 24hour format.. (e.g. 17)");
if (hour > 6 && hour <= 9) {
    alert("Breakfast is served.");
}
else if (hour > 11 && hour <= 13) {
    alert("Time for lunch.");
}
else if (hour > 17 && hour <= 20) {
    alert("It\'s dinner time.");
}
else {
    alert("Sorry, you'll have to wait, or go get a snack.");
}

//16.
var var1 = false;
var var2 = 453;
var var3 = "Computer";
var var4;

alert(var1 + " is a " + typeof var1);
alert(var2 + " is a " + typeof var2);
alert(var3 + " is a " + typeof var3);
alert(var4 + " is " + typeof var4);

//17.
var x = prompt("Please enter a vowel..");

if (x == "A" || x == "a" || x == "E" || x == "e" || x == "I" ||
    x == "i" || x == "O" || x == "o" || x == "U" || x == "u") {
    alert(true);
}
else {
    alert(false);
}

//18.
if (10 != 8) {
    alert("True");
}

//19.
var month = parseInt(prompt("Enter a month number.."));

switch (month) {
    case 1:
        alert("January");
        break;
    case 2:
        alert("February");
        break;
    case 3:
        alert("March");
        break;
    case 4:
        alert("April");
        break;
    case 5:
        alert("May");
        break;
    case 6:
        alert("June");
        break;
    case 7:
        alert("July");
        break;
    case 8:
        alert("August");
        break;
    case 9:
        alert("September");
        break;
    case 10:
        alert("October");
        break;
    case 11:
        alert("November");
        break;
    case 12:
        alert("December");
        break;
    default:
        alert("Error! Invalid month number");
}

//20.
var age = prompt("Enter a number..");
var voteable = age < 18 ? "Too young!" : "Old enough!";
alert(voteable);

//////////////////////////////////////////

//////////////chapter 14-17///////////////

//1.
var studentNames = [];

//2.
var studentNames = new Array();

//3.
var rgb = ["Red", "Green", "Blue"]

//4.
var numArray = [22, 44, 66, 88]

//5.
var booArray = [true, false]

//6.
var mixArray = [false, "One", 2, "Three", 4]

//7.
var networks = ["Jazz", "Zong", "Telenor", "Ufone", "Warid"]

//8.
var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

for (var x = 0; x < edu.length; x++) {
    document.write(x + 1 + ") " + edu[<x]+ "<br/>");
}

//9.
var movies = [];
movies[0] = "Avengers: Age of Ultron";
movies[1] = "Spectre";
movies[2] = "Jurassic World";
movies[3] = "Inside Out";

for (var x = 0; x < movies.length; x++) {
    document.write(x + 1 + ") " + movies[x] + "<br/><br/>");
}
document.write("Length of the array: " + movies.length);

//10.
var cars = ["Range Rover", "Jaguar", "Koenigsegg", "Lamborghini"];
document.write(cars + "<br/><br/>");

document.write("First index of the array: " + (cars.length - cars.length) + "<br/>");
document.write("Car at the first index of the array: " + cars[0] + "<br/>");
document.write("Last index of the array: " + (cars.length - 1) + "<br/>");
document.write("Car at the last index of the array: " + cars[cars.length - 1] + "<br/>");

//11.
var student = [];
var marks = [];
var per = [];
for (var x = 0; x < 3; x++) {
    student.push(prompt('Enter the name of Student ' + (x + 1)));
    marks.push(prompt('Enter the marks of ' + student[x] + " (Out of 500)"));
    per.push(marks[x] * 100 / 500);
}

for (var y = 0; y < 3; y++) {
    document.write("Score of " + student[y] + " is " + marks[y] + ". Percentage: " + per[y] + "%>br/<");
}

//12.
var colors = ["red", "blue", "green", "yellow", "orange"];
//a
colors.unshift(prompt(colors + "\nEnter the color which you want to add at begining.."));
//b
colors.push(prompt(colors + "\nEnter the color which you want to add at end.."));
//c
colors.unshift("Grey", "Lemon");
alert("Two more colors added at the begining..\n" + colors);
//d
colors.shift();
alert("One color deleted from the begining..\n" + colors);
//e
colors.pop();
alert("One more color deleted from the end..\n" + colors);
//f
var newColorIndex = prompt("Enter the index where you want to add a color..\n" + colors);
var newColorName = prompt("Enter the color name you want to add at Index=> " + newColorIndex + "\n" + colors);
colors.splice(newColorIndex, 0, newColorName);
//g
var removeIndex = prompt("Enter the index where you want to remove color(s)..\n" + colors);
var removeCount = prompt("Enter the number of color(s) you want to remove at Index=> " + removeIndex + "\n" + colors);
colors.splice(removeIndex, removeCount);

alert("Final Array:\n" + colors);

//13.
var scores = [];

for (var x = 1; x < 6; x++) {
    scores.push(prompt("Enter the marks of Student " + x));
}

document.write("Scores of Students : " + scores + "<br/>");
scores.sort(function (a, b) { return a - b });
document.write("Ordered Scores of Students : " + scores);

//14.
var fruits = ["strawberry", "apple", "orange", "banana"];

document.write("Fruits list: <br/>" + fruits + "<br/>");
fruits.sort();
document.write("Ordered Fruits list: <br/>" + fruits);

//15.
var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities list: <br/>" + city + "<br/><br/>");

var cityNew = city.slice(2, 4);
document.write("Selected cities list: <br/>" + cityNew);

//16.
var arr = ["This", "is", "my", "cat"];
document.write("Array: <br/>" + arr + "<br/><br/>");

var arrJoint = arr.join(" ");
document.write("String: <br/>" + arrJoint);

//17.
var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices: <br/>" + devices + "<br/><br/>");

for (var x = 0; x < devices.length; x++) {
    document.write("Out: <br/>" + devices[x] + "<br/>");
}

//18
var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices: <br/>" + devices + "<br/><br/>");

devices.reverse();
for (var x = 0; x < devices.length; x++) {
    document.write("Out: <br/>" + devices[x] + "<br/>");
}

//19.
var array = ["Apple", "Samsung", "Nokia", "Motorolla"];

var newSelect = "<select>";
for (var x = 0; x < array.length; x++) {
    newSelect += "<option>" + array[x] + "</option>";
}
newSelect += "</select>";

document.write(newSelect);

//20.
var multiArray = [[], []];

//21.
var multiArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

//////////////////////////////////////////

//////////////chapter 18-20///////////////

//1.
for (var x = 1; x <= 5; x++) {
    alert("Hello world");
}

//2.
for (var x = 1; x <= 10; x++) {
    document.write(x + "<br/>");
}

//3.
var num = prompt("Enter the number to print its multiplication table");
var length = prompt("Enter the length of multiplication table");

document.write("Multiplication table of " + num + "<br/>");
document.write("Length " + length + "<br/><br/>");

for (var x = 1; x <= length; x++) {
    document.write(num + " × " + x + " = " + (num * x) + "<br/>");
}

//4.
var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
for (var x = 0; x < A.length; x++) {
    sss.innerHTML += (A[x] + "<br/>");
}

//5.
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var x = 0; x < fruits.length; x++) {
    sss.innerHTML += (fruits[x] + "<br/>");
}

for (var x = 0; x < fruits.length; x++) {
    sss.innerHTML += ("Element at index " + x + " is " + fruits[x] + "<br/>");
}

//6.
var items = [];
var num = prompt("Enter number of items");

document.write("Number of items: " + num + "<br/><br/>" + "Items:" + "<br/>");
for (var x = 0; x < num; x++) {
    items.push(prompt("Enter the value for index " + x));
    document.write(items[x] + "<br/>");
}

//7.
document.write("Counting:<br/>");
for (var x = 1; x <= 15; x++) {
    document.write(x + ", ");
}

document.write("<br/><br/>Reverse counting:<br/>");
for (var x = 10; x >= 1; x--) {
    document.write(x + ", ");
}

document.write("<br/><br/>Even:<br/>");
for (var x = 0; x <= 20; x += 2) {
    document.write(x + ", ");
}

document.write("<br/><br/>Odd:<br/>");
for (var x = 1; x <= 20; x += 2) {
    document.write(x + ", ");
}

document.write("<br/><br/>Series:<br/>");
for (var x = 2; x <= 20; x += 2) {
    document.write(x + "k, ");
}

//8.
var arr = ["a", "b", "c", "d", "e"];
var user = prompt("Welcome to ABC Bakery. What do you want to order?");
var available = false;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === user) {
        document.write(user + " is <strong>available</strong> at index " + arr.indexOf(user) + " in our bakery.");
        available = true;
    }
}

if (!available) {
    document.write("We are sorry. " + user + " is <strong>not available</strong> in our bakery.");
}

//9.
var A = [24, 53, 78, 91, 12];
var largestNum = Math.max.apply(Math, A);

document.write("Array items: " + A + "<br/>");
document.write("The largest number is " + largestNum);

//10.
var A = [24, 53, 78, 91, 12];
var smallestNum = Math.min.apply(Math, A);

document.write("Array items: " + A + "<br/>");
document.write("The smallest number is " + smallestNum);

//11.
var A = [24, 53, 78, 91, 12];
var smallestNum = Math.min.apply(Math, A);
var largestNum = Math.max.apply(Math, A);

document.write("Array items: " + A + "<br/>");
document.write("The smallest number is " + smallestNum + "<br/>");
document.write("The largest number is " + largestNum);

//12.
for (x = 5; x <= 100; x += 5) {
    document.write(x + ", ");
}

//13.
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

var newTable = "<table border='1'>";
newTable += "<tr>";
newTable += "<td>Students</td>";
newTable += "<td>Scores</td>";
newTable += "</tr>";

for (var x = 0; x < scores.length; x++) {
    newTable += "<tr>";
    newTable += "<td>" + students[x] + "</td>";
    newTable += "<td>" + scores[x] + "</td>";
    newTable += "</tr>";
}
newTable += "</table>";

document.write(newTable);

//14.
var scores = [12, 45, 3, 22, 34, 50];
var stopValue = prompt(scores + "\n\nEnter number of values you want see from start..");

for (x = 0; x < stopValue; x++) {
    document.write(scores[x] + ", ");
}

//15.
A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var x = 0; x < A[x].length; x++) {
    for (var y = 0; y < A.length; y++) {
        document.write(A[x][y] + " ");
    }
    document.write("<br/>");
}

//16.
var num = prompt("Enter a number");
for (num; num >= 0; num -= 0.5) {
    document.write(num + ", ")
}

//17.
for (var x = 0; x <= 20; x++) {
    if (x % 2 === 0) {
        document.write(x + " is even");
    }
    else {
        document.write(x + " is odd")
    }
    document.write("<br/>");
}

//18.
var odds = 1;
for (var x = 1; x <= 7; x += 2) {
    odds *= x;
}
document.write("The product of the odd integers from 1 to 7 is " + odds);

//19.
var stars = prompt("Enter the initial number of stars");

for (var x = 0; xx; y--) {
    document.write("*")
    document.write("<br/>")
}

//20.
var stars = prompt("Enter the number of lines..");
//Wedge A
for (var x = 0; x < stars; x++) {
    for (var y = 1; y <= stars; y++) {
        document.write("*")
    }
    document.write("<br/>")
}

document.write("<br/><br/>");
//Wedge B
for (var x = 0; x < stars; x++) {
    for (var y = 0; x >= y; y++) {
        document.write("*")
    }
    document.write("<br/>")
}

document.write("<br/><br/>");
//Wedge C
for (var x = 0; x < stars; x++) {
    for (var y = stars; y > x; y--) {
        document.write("*")
    }
    document.write("<br/>")
}