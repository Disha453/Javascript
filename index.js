console.log("Switch case");

const minuutes = new Date().getMinutes();
console.log(minuutes);

 
switch (minuutes) {
    case 36: {
        console.log("minute is 36")

    }
        break;
    case 37: {
        console.log("minute is 37")
    }
        break;
    case 38: {
        console.log("minute is 38");
    }
        break;
    case 39: {
        console.log("minute is 39");
    }
        break;
    case 40: {
        console.log("minute is 40");
    }
        break;
    default: {
        console.log("default")
    }
}
