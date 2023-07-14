setInterval(() =>{
let time = new Date();

document.querySelector(".h").innerText = time.getHours();
document.querySelector(".m").innerText = time.getMinutes();
document.querySelector(".s").innerText = time.getSeconds();

},1000) // 1000 ms = 1s