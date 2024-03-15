console.log("form123")
let student1 = JSON.parse(localStorage.getItem("form1234")) || []

// table1
const displayTable1 = () => {
    document.getElementById("1").innerHTML = student1.map((item, index) => {
        return (
            `<tr>
            <td>${item.StudentName}</td>
            <td>${item.StudentRollno}</td>
            <td>${item.Subject}</td>
            <td>${item.Course}</td>
            <td>${item.SchoolName}</td>
            
            </tr>`
        )
    }).join('')

}
displayTable1();




let student2 = JSON.parse(localStorage.getItem("form1235")) || []

// table2
const displayTable2 = () => {
    document.getElementById("2").innerHTML = student2.map((item, index) => {
        return (
            `<tr>
            <td>${item.StudentName}</td>
            <td>${item.StudentRollno}</td>
            <td>${item.Subject}</td>
            <td>${item.Course}</td>
            <td>${item.SchoolName}</td>
            
            </tr>`
        )
    }).join('')

}
displayTable2();




let student3 = JSON.parse(localStorage.getItem("form1236")) || []

// table3
const displayTable3 = () => {
    document.getElementById("3").innerHTML = student3.map((item, index) => {
        return (
            `<tr>
            <td>${item.StudentName}</td>
            <td>${item.StudentRollno}</td>
            <td>${item.Subject}</td>
            <td>${item.Course}</td>
            <td>${item.SchoolName}</td>
            
            </tr>`
        )
    }).join('')

}
displayTable3();


//function

function display() {
    const StudentName = document.getElementById("StudentName").value;
    console.log(StudentName);

    const StudentRollno = document.getElementById("StudentRollno").value;
    console.log(StudentRollno);

    const Subject = document.getElementById("Subject").value;
    console.log(Subject);

    const Course = document.getElementById("Course").value;
    console.log(Course);

    const SchoolName = document.getElementById("SchoolName").value;
    console.log(SchoolName);


    //object
    const window = {
        StudentName: StudentName, StudentRollno: StudentRollno, Subject: Subject, Course: Course, SchoolName: SchoolName
    }

    switch (SchoolName) {
        case 'SchoolName1': {
            student1.push(window);
            displayTable1();
            localStorage.setItem("form1234", JSON.stringify(student1));


        }
            break;

        case 'SchoolName2': {
            student2.push(window);
            displayTable2()
            localStorage.setItem("form1235", JSON.stringify(student2));

        }
            break;


        case 'SchoolName3': {
            student3.push(window);
            displayTable3();
            localStorage.setItem("form1236", JSON.stringify(student3));

        }
            break;
    }


}









