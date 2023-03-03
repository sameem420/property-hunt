// See https://aka.ms/new-console-template for more information
string name = "Muhammad";

switch (name)
{
    case "muhammad":
        Console.WriteLine("Lower Case : does not match!");
        break;
    case "Muhammad":
        Console.WriteLine("This matches exactly!");
        break;
    default:
        Console.WriteLine("This does not match with any case!");
        break;
}
