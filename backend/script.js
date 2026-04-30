let init_value = 0;
const click_value = document.getElementById("clicks");

// we find the click element by "clicks" id

window.addEventListener("DOMContentLoaded",()=>{
     click_value.textContent = 0;
})

window.addEventListener("click",()=>{
     init_value++;
     click_value.textContent = init_value; 
})