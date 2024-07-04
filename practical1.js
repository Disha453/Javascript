console.log("swichcase")

const Month = new Date().getMonth();
console.log(Month);



const swichcase = () => {

    let number = document.getElementById("number").value;
    console.log(number)


    switch (number) {
        case '2': {
            console.log("4");
            document.getElementById("1").innerHTML = "4";
        }
            break;

        case '3': {
            console.log("9");
            document.getElementById("1").innerHTML = "9";
        }
            break;

        case '4': {
            console.log("16");
            document.getElementById("1").innerHTML = "16";
        }
            break;

        case '5': {
            console.log("25");
            document.getElementById("1").innerHTML = "25";
        }
            break;

        case '6': {
            console.log("36");
            document.getElementById("1").innerHTML = "36";
        }
            break;

        case '7': {
            console.log("49");
            document.getElementById("1").innerHTML = "49";
        }
            break;

        case '8': {
            console.log("64");
            document.getElementById("1").innerHTML = "64";
        }
            break;
        case '9': {
            console.log("81");
            document.getElementById("1").innerHTML = "81";
        }
            break;
        default: {
            console.log("default");
            document.getElementById("1").innerHTML = "default";
        }
    }
}
