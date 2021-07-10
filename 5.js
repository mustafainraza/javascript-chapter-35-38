var first=prompt("enter first number : ");
var last=prompt("enter second number : ");
var op=prompt("enter operator (+ - * /) : ");
var com;
function fun()
{
    if(op=='+')
    {
        com=parseFloat(first)+parseFloat(last);
    }
    else if(op=='-')
    {
        com=parseFloat(first)-parseFloat(last);
    }
    else if(op=='*')
    {
        com=parseFloat(first)*parseFloat(last);
    }
    else if(op=='/')
    {
        com=parseFloat(first)/parseFloat(last);
    }
}
fun();
document.write(first+" "+op+" "+last+"  ="+com);
