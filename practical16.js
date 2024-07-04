console.log("form");
let isedit = -1;
let student = JSON.parse(localStorage.getItem("hard")) || []

// edit button 

const handleEdit = (idx) => {
    isedit = idx
    const record = student.find((item, index) => { return (index === idx) });
    console.log(record);



    document.getElementById("firstname").value = record.firstname;
    document.getElementById("lastname").value = record.lastname;
    document.getElementById("age").value = record.age;
    document.getElementById("range").value = record.range;
    document.getElementById("color").value = record.color;
    document.getElementById("subject").value = record.subject;
}

//delete button : splice methods
let deleteRecord = (index) => {
    student.splice(index, 1);
    console.log("student", student);
    localStorage.setItem("hard", JSON.stringify(student));
    displayTable();
}


//table
const displayTable = () => {
    document.getElementById("s").innerHTML = student.map((item, index) => {
        return (
            `<tr>
            <td>${item.firstname}</td>
          <td>${item.lastname}</td>
            <td>${item.age}</td>
            <td>${item.range}</td>
            <td>${item.color}</td>
            <td>${item.subject}</td>
            <td><button type="button" onclick="deleteRecord(${index})"> delete </button></td>
            <td><button type="button" onclick="handleEdit(${index})"> edit </td>
            </tr>`
        )
    }).join('')
}
displayTable();


function disply() {
    const firstname = document.getElementById("firstname").value;
    console.log(firstname);


    const lastname = document.getElementById("lastname").value;
    console.log(lastname);


    const age = document.getElementById("age").value;
    console.log(age);

    const range = document.getElementById("range").value;
    console.log(range);

    const color = document.getElementById("color").value;
    console.log(color);

    const subject = document.getElementById("subject").value;
    console.log(subject);


    //object

    const hello = {
        firstname: firstname, lastname: lastname, age: age, range: range, color: color, subject: subject
    }

    //edit button code
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
    displayTable()
    localStorage.setItem("hard", JSON.stringify(student));
    console.log("student", student)
    console.log(hello)
}

// sort button
// callback or arrow body function 

const sortTable = () => {
    const sortedData = student.sort((a, b) => { return (a.firstname.localeCompare(b.firstname)) });
    console.log(sortedData);
    student = sortedData;
    displayTable()
}

const sortTable1 = () => {
    const sortedData = student.sort((a, b) => { return (a.lastname.localeCompare(b.lastname)) });
    console.log(sortedData);
    student = sortedData;
    displayTable()
}

const sortTable2 = () => {
    const sortedData = student.sort((a, b) => { return (a.age - b.age) });
    console.log(sortedData);
    student = sortedData;
    displayTable()
}

const sortTable3 = () => {
    const sortedData = student.sort((a, b) => { return (a.range - b.range) });
    console.log(sortedData);
    student = sortedData;
    displayTable()
}

const sortTable4 = () => {
    const sortedData = student.sort((a, b) => { return (a.color.localeCompare(b.color)) });
    console.log(sortedData);
    student = sortedData;
    displayTable()
}



const sortTable5 = () => {
    const sortedData = student.sort((a, b) => { return (a.subject.localeCompare(b.subject)) });
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




















