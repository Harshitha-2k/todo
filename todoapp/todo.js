const input = document.querySelector("#inside")
const button = document.querySelector(".btn");
const list = document.querySelector("#todo");
const content1 = document.querySelector(".text");
 
button.addEventListener("click",added);

 function added(e){
 e.preventDefault();

 const div = document.createElement("div");
 div.classList.add("todotask");
     
    const content1 = document.createElement("div");
    content1.classList.add("contenttodo");
    div.appendChild(content1);
     
    const todoinput = document.createElement("input");
    todoinput.classList.add("text");
    todoinput.type="text";
    todoinput.value= inside.value;
    content1.appendChild(todoinput);
    
    const editbtn = document.createElement("button");
    editbtn.innerHTML = "Edit";
    editbtn.classList.add("edit-btn");
    content1.appendChild(editbtn);

    const deletebtn = document.createElement("button");
    deletebtn.innerHTML = "Delete";
    deletebtn.classList.add("delete-btn");
    content1.appendChild(deletebtn);    
    list.appendChild(div);
    inside.value="";

    editbtn.addEventListener("click",()=>{
    if(editbtn.innerHTML === "Edit"){
    editbtn.innerHTML = "Save";   
    }else{
    editbtn.innerHTML = "Edit";
    }
    })
    deletebtn.addEventListener("click",()=>{
    list.removeChild(div);
 
    })


  
}
