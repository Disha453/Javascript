console.log("java");
let isedit = -1;
let student = JSON.parse(localStorage.getItem("java")) || []


// edit button
const dEdit = (idx) => {
    isedit = idx
    const record = student.find((item, index) => { return (index === idx) });
    console.log(record);

    document.getElementById("firstname").value = record.firstname;
    document.getElementById("lastname").value = record.lastname;
    document.getElementById("password").value = record.password;
    document.getElementById("dob").value = record.dob;
    document.getElementById("age").value = record.age;
}




//delete button splice method
const deleteRecord = (index) => {
    student.splice(index, 1);
    console.log("student", student);
    localStorage.setItem("java", JSON.stringify(student));
    displayTable();
}



//table

const displayTable = () => {

    document.getElementById("f").innerHTML = student.map((item, index) => {
        return (
            `<tr>
            <td>${item.firstname}</td>
            <td>${item.lastname}</td>
            <td>${item.password}</td>
            <td>${item.dob}</td>
            <td>${item.age}</td>
            <td><button type="button" onclick = deleteRecord(${index})> delete </button></td>
            <td><button type="button" onclick = dEdit(${index})> Edit </td>
            
            <tr>`
        )
    }).join('')

}
displayTable();

//sort button
// callback or arrow body function 
const sortTable = () => {

    const sortedData = student.sort((a, b) => { return (b.lastname.localeCompare(a.lastname)) });
    console.log(sortedData);
    student = sortedData;
    displayTable()

}

//search button
const searchData = () => {
    const searchValue = document.getElementById("search").value;
    const filteredData = student.filter((item) => { return (item?.firstname?.toLocaleLowerCase() === searchValue?.toLocaleLowerCase()) });
    console.log(filteredData);
    
    const filteredDataa = student.filter((item) => { return (item?.firstname?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase())) });
    console.log(filteredDataa);
    student = filteredDataa;
    displayTable()
}

//includes methods
let newAAArry =["Potato","Tomato","Chilli","Reddish"];
console.log(newAAArry.includes("Potatoaa"));

// function

function display() {
    const firstname = document.getElementById("firstname").value;
    console.log(firstname);

    const lastname = document.getElementById("lastname").value;
    console.log(lastname);

    const password = document.getElementById("password").value;
    console.log(password);

    const dob = document.getElementById("dob").value;
    console.log(dob);

    const age = document.getElementById("age").value;
    console.log(age);


    //object

    const data = {
        firstname: firstname, lastname: lastname, password: password, dob: dob, age: age

    }

    

    //edit button conditition code

    if (isedit !== -1) {
        const updatee = student.map((item, index) => {
            if (isedit === index) {
                return data
            }
            return item;

        })
        student = updatee;
    }


    else { student.push(data) };
    displayTable();
    localStorage.setItem("java", JSON.stringify(student));
    console.log("student", student);
    console.log(student)
}























