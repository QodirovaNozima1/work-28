const span = document.querySelector(".title span")


let offset = 0

function inc() {
    offset++
    span.textContent = offset
}

// let interval = setInterval(()=>{
//     console.log("qayata qayta");
//     inc()
//     // if (offset >= "star") {
//     //     clearInterval(interval)
//     // }
// } ,500)

// setTimeout(()=>{
//     console.log("stop");
// },3000)

// function stopInterval(params) {
//     clearInterval(interval)
// }


 const millisecond = document.querySelector(".millisecond");

 function soat(){
    let date = new Date()
    let hour = date.getHours().toString().padStart(2, "0")
    let minute = date.getMinutes().toString().padStart(2, "0")
    let second = date.getSeconds().toString().padStart(2, "0")
    let millisecond = date.getMilliseconds().toString().padStart(2, "0")
    let day = date.getDay()
    clock.textContent = `${hour}:${minute}:${second}`;
    millisecond.textContent = `${millisecond}`
}
soat()
setInterval(()=>{
    soat()
},100);