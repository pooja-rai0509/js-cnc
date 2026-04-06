// switch case values match are case sensitive
const month = "march"

switch (month) {
    case "Jan":
        console.log("January");
        
        break;
    case "feb":
        console.log("Feb");
        
        break;
    case "march":
        console.log("March");
        
        break;
    case 4:
        console.log("April");
        
        break;

    default:
        console.log("Default case match");
        break;
}