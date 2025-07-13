let inp = document.querySelector("input");
let image = document.querySelector(".qrImage");
let box = document.querySelector(".imgBox");



function generateQR() {
    if(inp.value.trim().length != 0){
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +inp.value; 
        box.classList.add("show-img");
    } else{
        inp.classList.add("error");
        setTimeout(() =>{
            inp.classList.remove("error");
        }, 1000)
        box.classList.remove("show-img");
    }
}
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        generateQR();
    }
});