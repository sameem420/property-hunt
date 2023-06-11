// See https://aka.ms/new-console-template for more information

int age = 24;
float f = 1.1122f;
double d = 1.2345;
char favCh = 'C';
string name = "Muhammad Sameem";
var favQuote = "Earth is moving, so should you!";

Console.WriteLine(age + ", " + f  + ", " + d + ", " + favCh + ", " + name);

// String formatting
Console.WriteLine("My age is {0}, My float point number is {1}, My double number is {2}, My favorite character is {3}, My name is {4}", age, f, d, favCh, name);

Console.WriteLine(favQuote);

// Decalre Arrays
int[] vals = new int[5];
string[] strs = {"one", "two", "three"};