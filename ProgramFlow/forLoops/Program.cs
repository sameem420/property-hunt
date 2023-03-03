// See https://aka.ms/new-console-template for more information
int favNum = 21;
int[] nums = new int[] {5,14,61,72,88};
string quote = "A quick brown fox jumps over the lazy dog";
var count = 0;

for (int i = 1; i <= favNum; i++)
{
    Console.WriteLine("Iterating till : " + i);
}

foreach (var num in nums)
{
    Console.WriteLine("Printing random numbers : " + num);
}

foreach (var ch in quote)
{
    if(ch == 'o') {
        count++;
    }
}
 Console.WriteLine("Counted {0} o characters!", count );
