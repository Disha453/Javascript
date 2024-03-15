
//odd & even nmbers

function display() {


    let java = parseInt(document.getElementById("number").value);

    if (java % 2 == 0) {
        alert("even number");
        console.log("even number");
        document.getElementById("answers").value = "even number";
    }
    else {
        alert("odd number");
        console.log("odd number");
        document.getElementById("answers").value = "odd number";
    }

}

// next numbers

function hello() {
    let numbers = parseInt(document.getElementById("numbers").value);
    console.log(numbers);
    document.getElementById("o").innerHTML = numbers + 1;

}


//same reading

function java() {

    let java = document.getElementById("fullname").value;
    console.log(java);

    const word = java.split("")
    console.log(word);

    const stable = word.reverse().join("");
    console.log(stable);

    if (java == stable) {
        return document.getElementById("g").innerHTML = "palindrome word";
    }
    else {
        return document.getElementById("g").innerHTML = "none palindrome word";
    }

}




