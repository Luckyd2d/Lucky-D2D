document.getElementById("applyForm").addEventListener("submit", async e=>{

e.preventDefault()

let data={

name:document.getElementById("name").value,
email:document.getElementById("email").value,
phone:document.getElementById("phone").value,
state:document.getElementById("state").value,
message:document.getElementById("message").value

}

await fetch("YOUR_GOOGLE_SCRIPT_URL",{

method:"POST",
body:JSON.stringify(data)

})

alert("Application Submitted!")

})
