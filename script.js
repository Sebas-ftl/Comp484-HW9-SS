// ==========================
// Part 1: Date Display
// ==========================

//date
var date = new Date()

//individual vars
var month = date.getMonth() +1;
var day = date.getDate();
var year = date.getFullYear();

// adds leading 0 if needed
if( month < 10) {
    month = "0"+month;
}
if (day < 10) {
    day = "0"+day;
}

//output
document.getElementById("dateOutput").innerHTML = "Today is "+month+"/"+day+"/"+year;


// ==========================
// Part 2: Number Conversion
// ==========================

//Variables
var num1 = "42";
var num2 = "12";
var dec1 = "3.14"
var str = "Hello"

// Conversion and checks
// Conversion to number()
num1a= Number(num1);
num2a = Number(num2);
dec1a = Number(dec1);
stra = Number(str);

//NaN check
var num1b= Number.isNaN(num1a);
var num2b = Number.isNaN(num2a);
var dec1b = Number.isNaN(dec1a);
var strb = Number.isNaN(stra);

//integer check
var num1c= Number.isInteger(num1a);
var num2c = Number.isInteger(num2a);
var dec1c = Number.isInteger(dec1a);
var strc = Number.isInteger(stra);

//Summary Sentences
var res1 = "Original: " +num1+ " -> Converted: " +num1a+ " -> isNaN: " +num1b+ " -> isInteger: " +num1c;
var res2 = "Original: " +num2+ " -> Converted: " +num2a+ " -> isNaN: " +num2b+ " -> isInteger: " +num2c;
var res3 = "Original: " +dec1+ " -> Converted: " +dec1a+ " -> isNaN: " +dec1b+ " -> isInteger: " +dec1c;
var res4 = "Original: " +str+ " -> Converted: " +stra+ " -> isNaN: " +strb+ " -> isInteger: " +strc;

// output string set-up
var finalresult =   res1 + "<br>" + 
                    res2 + "<br>" + 
                    res3 + "<br>" + 
                    res4;

//output
document.getElementById("numberConversionOutput").innerHTML = finalresult;

// ==========================
// Part 3: Math & Formatting
// ==========================

// Vars
var a = 3;
var b = 21;
var c = 85374;

// Calculations
var apc = a+c;
var bda = b/a;
var bxc = b*c;

// Visual fix
var adjapc = apc.toLocaleString();
var adjbxc = bxc.toLocaleString();

// Print format
var mathresult =    "Variables" + "<br>" +
                    "a = " + a + "<br>" +
                    "b = " + b + "<br>" +
                    "c = " + c + "<br><br>" +
                    "Calculations" + "<br>" +
                    "a + c = " + adjapc + "<br>" +
                    "b / a = " + bda + "<br>" +
                    "b x c = " + adjbxc;

// output
document.getElementById("mathOutput").innerHTML = mathresult;

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
if (a > c) {
    
} else {

}
if (Number.isInteger(num1a)) {

} else {
    
}
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)
