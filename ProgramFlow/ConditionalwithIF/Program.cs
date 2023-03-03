// See https://aka.ms/new-console-template for more information

int value = 23;

if (value == 21)
{
    Console.WriteLine("The value is equal to 21!");
}
else if (value >= 21 && value <= 25) {
    Console.WriteLine("The value is in-between 21 and 25");
}
else
{
    Console.WriteLine("The value does not match!");
}

Console.WriteLine(value > 20 ? "The value is greater" : "The value is smaller");