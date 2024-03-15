console.log("time");

const year = () => {

    const year1 = document.getElementById("year1").value;
    console.log(year1);

    const year2 = document.getElementById("year2").value;
    console.log(year2);

    let date1 = new Date(year1);
    let date2 = new Date(year2);

    let hour1 = date1.getFullYear();
    let hour2 = date2.getFullYear();
    console.log(parseInt(hour1) - parseInt(hour2));

    if (parseInt(hour1) - parseInt(hour2) < 0) {
        alert("valid")
    }
    else { alert("invalid") }

}



//time different
const time = () => {
    const time1 = document.getElementById("time1").value;
    console.log(time1);

    const time2 = document.getElementById("time2").value;
    console.log(time2);

    console.log(parseInt(time1) - parseInt(time2));
    if (parseInt(time1) - parseInt(time2) > 0) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}


//date different
const date = () => {
    const date1 = document.getElementById("date1").value;
    console.log(date1);

    const date2 = document.getElementById("date2").value;
    console.log(date2);

    console.log(parseInt(date1) - parseInt(date2));
    if (parseInt(date1) - parseInt(date2)) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}


//day into con.  years

const days = () => {


    const hello = document.getElementById("day").value;
    console.log(parseInt(hello) / 365 + "year");
}



// date into con. age

const age = () => {

    let birthdate = new Date(document.getElementById('date3').value);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - 1 - birthdate.getFullYear() + " year";
    console.log(age);

    let month = birthdate.getMonth() - currentDate.getMonth() + " month";
    console.log(month);

    let day = birthdate.getDate() - currentDate.getDate() + " day";
    console.log(day);


}



function Age() {
    var d1 = document.getElementById('datee').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;
    var date = new Date();

    var d2 = date.getDate();
    console.log(d2);

    var m2 = 1 + date.getMonth();
    console.log(m2);

    var y2 = date.getFullYear();
    console.log(y2);

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - d1;
    console.log(d + " Days");

    var m = m2 - m1;
    console.log(m + " Month");

    var y = y2 - y1;
    console.log(y + " Years");


}









