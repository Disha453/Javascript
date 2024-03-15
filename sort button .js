console.log("disk");


let student = JSON.parse(localStorage.getItem("disk")) || []



//sort button 
//callback or arrow body function
//sort button condition for dropdown button
const sortTable = () => {
    let seleted = document.getElementById("h").value
    console.log(seleted)

    if (seleted === "x") {
        const sortedData = student.sort((a, b) => { return (a.x.localeCompare(b.x)) });
        console.log(sortedData);
        student = sortedData;
        localStorage.setItem("disk", JSON.stringify(sortedData));
        displayTable()
    }
    else if (seleted === "y") {
        const sortedData1 = student.sort((a, b) => { return (a.y.localeCompare(b.y)) });
        console.log(sortedData1);
        student = sortedData1;
        localStorage.setItem("disk", JSON.stringify(sortedData1));
        displayTable()
    }

    else if (seleted === "z") {
        const sortedData2 = student.sort((a, b) => { return (a.z.localeCompare(b.z)) });
        console.log(sortedData2);
        student = sortedData2;
        localStorage.setItem("disk", JSON.stringify(sortedData2));
        displayTable()
    }


}




//table
const displayTable = () => {
    document.getElementById("s").innerHTML = student.map((item, index) => {
        return (
            `<tr>
        <td>${item.x}</td>
        <td>${item.y}</td>
        <td>${item.z}</td>
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


    const email = document.getElementById("email").value;
    console.log(email);


    // object
    const disk = {
        x: fullname, y: lastname, z: email
    }




    student.push(disk);
    displayTable();
    localStorage.setItem("disk", JSON.stringify(student));
    console.log("student", student)
    console.log(student);


}
