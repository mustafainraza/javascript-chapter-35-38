var radius=prompt("Enter radius to calculate : ");

function circum(radius)
{
    var c=2*(22/7)*radius;
    document.write("Circumference of circle is = "+c+"<br>");
}

function area(radius)
{
    var c=(22/7)*radius*radius;
    document.write("Area of circle is = "+c);
}

circum(radius);
area(radius);