// Switch Case :

let day =  "Sunday";
switch(day){
    case "Monday":
        console.log("First day of the week");
        break;
    case "Friday":
        console.log("Last day of the week");
        break;
    case "Saturday":
    case "Sunday":    
        console.log("Weekend");
        break;
    default:
        console.log("Weekday");
}