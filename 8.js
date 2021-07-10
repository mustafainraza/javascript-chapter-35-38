var st=prompt("Enter starting value : ");
var end=prompt("Enter ending value : ");

document.write("Counting starts !!! <br>")

if(st<end)
{
    for(var x=st;x<=end;x++)
    {
        document.write(x+"<br>")
    }
}
else
{
    for(var x=st;x>=end;x--)
    {
        document.write(x+"<br>")
    }
}