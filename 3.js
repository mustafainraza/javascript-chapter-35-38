var first=prompt("enter first number : ");
var last=prompt("enter second number : ");
function add()
{
    var sum=parseInt(first)+parseInt(last);
    document.write("The sum of "+first+" and "+last+" is = "+sum);
}

add();