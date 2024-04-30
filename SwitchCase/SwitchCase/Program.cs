string fruit = "banana";

switch (fruit)
{
    case "apple":
        Console.WriteLine($"App will display information for apple.");
        break;

    case "banana":
        Console.WriteLine($"App will display information for banana.");
        break;
    
    case "cherry":
        Console.WriteLine($"App will display information for cherry.");
        break;
}

// Create and test a switch statement

// int employeeLevel = 200;
// string employeeName = "John Smith";

// string title = "";

// switch (employeeLevel)
// {
//     case 100:
//         title = "Junior Associate";
//         break;
//     case 200:
//         title = "Senior Associate";
//         break;
//     case 300:
//         title = "Manager";
//         break;
//     case 400:
//         title = "Senior Manager";
//         break;
//     default:
//         title = "Associate";
//         break;
// }

// Console.WriteLine($"{employeeName}, {title}");


int employeeLevel = 100;
string employeeName = "John Smith";

string title = "";

switch (employeeLevel)
{
    case 100:
    case 200:
        title = "Senior Associate";
        break;
    case 300:
        title = "Manager";
        break;
    case 400:
        title = "Senior Manager";
        break;
    default:
        title = "Associate";
        break;
}

Console.WriteLine($"{employeeName}, {title}");

// SKU  = Stock Keeping Unit.
// SKU value format: <product #>-<2-letter color code>-<size code>
string sku = "01-MN-L";

string[] product = sku.Split('-');

string type = "";
string color = "";
string size = "";

if (product[0] == "01")
{
    type = "Sweat shirt";
} else if (product[0] == "02")
{
    type = "T-Shirt";
} else if (product[0] == "03")
{
    type = "Sweat pants";
}
else
{
    type = "Other";
}

if (product[1] == "BL")
{
    color = "Black";
} else if (product[1] == "MN")
{
    color = "Maroon";
} else
{
    color = "White";
}

if (product[2] == "5")
{
    size = "Small";
} else if (product[2] == "M")
{
    size = "Medium";
} else if (product[2] == "L")
{
    size = "Large";
} else
{
    size = "One Size Fits All";
}

Console.WriteLine($"Product: {size} {color} {type}");


string sku1 = "01-MN-L";

string[] product1 = sku1.Split('-');

string type1 = "";
string color1 = "";
string size1 = "";

switch (product1[0])
{
    case "01":
        type1 = "Sweat shirt";
        break;

    case "02":
        type1 = "T-Shirt";
        break;

    case "03":
        type1 = "Sweath pants";
        break;
}

switch (product1[1])
{
    case "BL":
        color1 = "Black";
        break;
    
    case "MN":
        color1 = "Maroon";
        break;

    default:
        color1 = "white";
        break;
}

switch (product1[2])
{
    case "S":
        size1 = "Small";
        break;

    case "M":
        size1 = "Medium";
        break;

    case "L":
        size1 = "Large";
        break;

    default:
        size1 = "One Size Fits All";
        break;
}

Console.WriteLine($"Product1: {size1} {color1} {type1}");
