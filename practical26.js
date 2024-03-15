console.log("form");

let isedit = -1;
let student = JSON.parse(localStorage.getItem("hello")) || []

//edit button

const hEdit = (idx) => {
    isedit = idx
    const record = student.find((item, index) => { return (index === idx) });
    console.log(record);


    document.getElementById("firstname").value = record.firstname;
    document.getElementById("lastname").value = record.lastname;
    document.getElementById("age").value = record.age;
    document.getElementById("tel").value = record.tel;
    document.getElementById("color").value = record.color;
}





//delete button : splice methods
const deleteRecord = (index) => {
    student.splice(index, 1);
    console.log("student", student);
    localStorage.setItem("hello", JSON.stringify(student));
    displayTable();
}



//table
const displayTable = () => {
    document.getElementById("s").innerHTML = student.map((item, index) => {
        return (
            `<tr >
            <td>${item.firstname}</td>
            <td>${item.lastname}</td>
            <td>${item.age}</td>
            <td>${item.tel}</td>
            <td>${item.color}</td>
            <td><button type="button" onclick=deleteRecord(${index})> Delete </button></td>
            <td><button type="button" onclick=hEdit(${index})> Edit </td>
            <tr>`
        )
    }).join('')
}
displayTable();

//function  
function display() {




    const firstname = document.getElementById("firstname").value;
    console.log(firstname);


    //light & dark word

    const split = firstname.split(" ");
    console.log("string split():", split);
    document.getElementById("d").innerHTML = split[0];
    document.getElementById("f").innerHTML = split[1];



    //last latter colorful
    const slicestring = firstname.slice(0, -6);
    console.log("string slice()", slicestring);
    document.getElementById("hello").innerHTML = slicestring;

    console.log("string slice()", firstname.slice(-6));
    document.getElementById("hello1").innerHTML = firstname.slice(-6);




    const lastname = document.getElementById("lastname").value;
    console.log(lastname);


    const age = document.getElementById("age").value;
    console.log(age);

    const tel = document.getElementById("tel").value;
    console.log(tel);

    const color = document.getElementById("color").value;
    console.log(color);



    //object

    const hello = {
        firstname: firstname, lastname: lastname, age: age, tel: tel, color: color
    }


    //edit button code condistion

    if (isedit !== -1) {
        const updatee = student.map((item, index) => {
            if (isedit === index) {
                return hello
            }
            return item;
        })
        student = updatee;
    }


    else { student.push(hello) };
    displayTable();
    localStorage.setItem("hello", JSON.stringify(student));
    console.log("student", student)
    console.log(student)


}

