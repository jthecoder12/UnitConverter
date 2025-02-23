const val1: number = parseInt(prompt("Enter the first number:") || "{}");
const conversion: number = parseInt(prompt(`1. Inches to Feet
2. Feet to Inches
3. Inches to Miles
4. Miles to Inches
5. Feet to Miles
6. Miles to Feet
7. Meters to Feet
8. Feet to Meters
9. Centimeters to Inches
10. Inches to Centimeters
11. Kilometers to Miles
12. Miles to Kilometers
13. Prime Number Checker

Choose an option:`) || "{}");

switch(conversion) {
    case 1: {
        console.log(val1 + " inches = " + val1/12 + " feet");
        break;
    }

    case 2: {
        console.log(val1 + " feet = " + val1 * 12 + " inches");
        break;
    }

    case 3: {
        console.log(val1 + " inches = " + val1 / 63360 + " miles");
        break;
    }

    case 4: {
        console.log(val1 + " miles = " + val1 * 63360 + " inches");
        break;
    }

    case 5: {
        console.log(val1 + " feet = " + val1 / 5280 + " miles");
        break;
    }

    case 6: {
        console.log(val1 + " miles = " + val1 * 5280 + " feet");
        break;
    }

    case 7: {
        console.log(val1 + " meters = " + val1 * 3.281 + " feet");
        break;
    }

    case 8: {
        console.log(val1 + " feet = " + val1 / 3.281 + " meters");
        break;
    }

    case 9: {
        console.log(val1 + " centimeters = " + val1 / 2.54 + " inches");
        break;
    }

    case 10: {
        console.log(val1 + " inches = " + val1 * 2.54 + " centimeters");
        break;
    }

    case 11: {
        console.log(val1 + " kilometers = " + val1 / 1.609 + " miles");
        break;
    }

    case 12: {
        console.log(val1 + " miles = " + val1 * 1.609 + " kilometers");
        break;
    }

    case 13: {
        let flag: boolean = false;
        let reason: string = "";

        for(let i = 2; i <= val1 / 2; i++)
        if(val1 % i == 0) {
            flag = true;
            reason = val1 / i + " * " + i + " = " + val1;
            break;
        }

        if(flag) console.log("Number is composite because: " + reason);
        else console.log("Number is prime");
        break;
    }  
}

prompt("Press return to close...");
