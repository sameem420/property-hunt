int num1 = 6; int num2 = 15;

int sumResult = num1 + num2;
int subResult = num1 - num2;
int multResult = num1 * num2;
int divResult = num1 / num2;
bool livingInUAE = true;
bool livingInPAK = false;


Console.WriteLine("Sum Result of two numbers is: " + sumResult);
Console.WriteLine("Subtraction Result of two numbers is: " + subResult);
Console.WriteLine("Multiplication Result of two numbers is: " + multResult);
Console.WriteLine("Division Result of two numbers is: " + divResult);

--num1;
num1 += num2;
++num1;
num2 -= num1;
num1++;
num1 *= num1;
++num2;
num2 /= num1;


Console.WriteLine("The Result is: " + num1);

Console.WriteLine("AND OP: " + (livingInUAE && livingInPAK));
Console.WriteLine("OR OP: " + (livingInUAE || livingInPAK));
Console.WriteLine("NOT OP: " + !livingInPAK);


