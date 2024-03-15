console.log("form");

let isedit = -1;
let student = JSON.parse(localStorage.getItem("data")) || []

// edit button
const sEdit = (idx) => {
    isedit = idx
    const record = student.find((item, index) => { return (index === idx) });
    console.log(record);

    document.getElementById("email").value = record.useremailemail;
    document.getElementById("password").value = record.password;
    document.getElementById("fullname").value = record.userfullnamefullname;
    document.getElementById("username").value = record.uname;
}



//delete button
const deleteRecord = (index) => {
    student.splice(index, 1);
    console.log("student", student);
    localStorage.setItem("data", JSON.stringify(student));
    displayTable();
}

// table

const displayTable = () => {
    document.getElementById("e").innerHTML = student.map((item, index) => {
        return (
            `<tr>
            <td>${item.useremail}</td>
            <td>${item.password}</td>
            <td>${item.userfullname}</td>
            <td>${item.uname}</td>
            <td><button type="button" onclick = deleteRecord(${index})> delete </button></td>
            <td><button type="button" onclick = sEdit(${index})> Edit </td>
            <tr>`

        )
    }).join('')
}
displayTable();



// function

function display() {

    const email = document.getElementById("email").value;
    console.log(email);


    const password = document.getElementById("password").value;
    console.log(password);

    const fullname = document.getElementById("fullname").value;
    console.log(fullname);

    const username = document.getElementById("username").value;
    console.log(username);

    //object

    const data = {
        useremail: email, password: password, userfullname: fullname, uname: username
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
    localStorage.setItem("data", JSON.stringify(student));
    console.log("student", student)
    console.log(student)
}


//sort button 
//callback or arrow body function

const sortTable = () => {
    const sortedData = student.sort((a, b) => { return (a.useremail.localeCompare(b.useremail)) });
    console.log(sortedData);
    student = sortedData;
    displayTable()
}

const sortTable1 = () => {
    const sortedData = student.sort((a, b) => { return (a.password.localeCompare(b.password)) });
    console.log(sortedData);
    student = sortedData;
    displayTable()
}

const sortTable2 = () => {
    const sortedData = student.sort((a, b) => { return (a.userfullname.localeCompare(b.userfullname)) });
    console.log(sortedData);
    student = sortedData;
    displayTable()
}

const sortTable3 = () => {
    const sortedData = student.sort((a, b) => { return (a.uname.localeCompare(b.uname)) });
    console.log(sortedData);
    student = sortedData;
    displayTable()
}


//search button

const searchData = () => {
    const searchValue = document.getElementById("search").value;
    // const filteredData = student.filter((item) => { return (item?.userfullname?.toLocaleLowerCase() === searchValue?.toLocaleLowerCase()) });
    // console.log(filteredData);

    //include methods

    const filteredDataa = student.filter((item) => { return (item?.userfullname?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase())) });
    console.log(filteredDataa);
    student = filteredDataa;
    displayTable()
}