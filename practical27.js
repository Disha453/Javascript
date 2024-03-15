console.log("hard");

let isedit = -1;
let student = JSON.parse(localStorage.getItem("new")) || []

//edit button
const aEdit = (idx) => {
    isedit = idx
    const record = student.find((item, index) => { return (index === idx) });
    console.log(record);

    document.getElementById("fullname").value = record.fullname;
    document.getElementById("lastname").value = record.lastname;
    document.getElementById("age").value = record.age;
    document.getElementById("email").value = record.email;
}





//delet button
const deleteRecord = (index) => {
    student.splice(index, 1);
    console.log("student", student);
    localStorage.setItem("new", JSON.stringify(student));
    displayTable();
}



//table
const displayTable = () => {
    document.getElementById("s").innerHTML = student.map((item, index) => {
        return (
            `<tr>
        <td>${item.fullname}</td>
        <td>${item.lastname}</td>
        <td>${item.age}</td>
        <td>${item.email}</td>
        <td><button type="button" onclick = deleteRecord(${index}) style = "background-color : transparent ; border-radius: 5px"> Delete </button> </td>
        <td> <button type = "button" onclick = aEdit(${index})  style = "background-color : transparent; border-radius: 5px">Edit </button></td>
        <tr>`
        )
    }).join('')
}
displayTable();



//function

function display() {
    const fullname = document.getElementById("fullname").value;
    console.log(fullname);

    const lastname = document.getElementById("lastname").value;
    console.log(lastname);

    const age = document.getElementById("age").value;
    console.log(age);

    const email = document.getElementById("email").value;
    console.log(email);


    // object
    const java = {
        fullname: fullname, lastname: lastname, age: age, email: email
    }

    // edit button conditition code 

    if (isedit !== -1) {
        const updatee = student.map((item, index) => {
            if (isedit === index) {
                return java
            }
            return item;

        })
        student = updatee;
    }



    else { student.push(java) };
    displayTable();
    localStorage.setItem("new", JSON.stringify(student));
    console.log("student", student);
    console.log(student)

}