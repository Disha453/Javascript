console.log("table");
let student = JSON.parse(localStorage.getItem("form")) || []

//table

const displayTable = () => {
    document.getElementById("th").innerHTML = student.map((item, index) => {
        return (

            `<div style = "display: flex; flex-direction: column; gap:10px">

               <div style="border:2px solid black; height:100px; width:100px; background-color: ${item.color}"></div>
                        <div>${item.id}</div>
                        <div>${item.post}</div>
                        <div>${item.Age}</div>
                        <div>${item.color}</div>
                      
            </div>`
        )
    }).join('')

}
displayTable();




// function

function data() {
    const id = document.getElementById("id").value;
    console.log(id);

    const post = document.getElementById("post").value;
    console.log(post);

    const Age = document.getElementById("Age").value;
    console.log(Age);

    const color = document.getElementById("color").value;
    console.log(color);




    //object
    const window = {
        id: id, post: post, Age: Age, color: color
    }


    student.push(window);
    displayTable();
    localStorage.setItem("form", JSON.stringify(student));
    console.log("student", student);
    console.log(student)








    // const findDuplicates = (nums) => {
    //     nums.sort(); // alters original array
    //     let ans = []
      
    //     for(let i = 0; i< nums.length; i++){
    //       if(nums[i] === nums[i+1]){
    //          if(ans[ans.length -1] !== nums[i]){
    //             ans.push(nums[i])
    //          }
    //       } 
    //     }
    //     return ans;
    //   }
}