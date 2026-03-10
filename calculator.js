function calculate(){

let sales=document.getElementById("sales").value

let commission=document.getElementById("commission").value

let income=sales*(commission/100)

document.getElementById("result").innerText=

"Estimated Weekly Commission: $" + income

}
