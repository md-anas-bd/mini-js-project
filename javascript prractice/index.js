const btnplus = document.querySelector(".btn_plus");
const btnminus = document.querySelector(".btn_minus");
const count = document.querySelector(".number");

//main fucntion  increament 
 let number= 0;
btnplus.addEventListener("click",function () {
    number++;
    count.textContent= number;
    if (number%2===0) {
        const body=document.querySelector(".counter")
        body.style.backgroundColor= "green"
        
    } else{
        const body=document.querySelector(".counter")
       body.style.backgroundColor= "white"

    }
});


btnminus.addEventListener("click",function () {
    number--;
    count.textContent= number;
    if (number <= 0) {
        const button = document.querySelector(".buttons");
        button.textContent="negetive number cant show"
        count.textContent="0"
        
      }
      setTimeout(function() {
        location.reload();
    }, 5000);
});




