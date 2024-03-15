
let principleInput = document.querySelector("#amount");
let timeyInput = document.querySelector("#years");
let rateInput = document.querySelector("#rate");
let form = document.querySelector("form");
let p=document.querySelector('#lcg');
let total =document.querySelector('#principal');
let interest=document.querySelector('#interest');

// Function to calculate the interest
const calculateInterest = ()=>{
     // Convert values to integers
 var principle = parseInt(principleInput.value);
 var years = parseInt(timeyInput.value);
 var rate = parseInt(rateInput.value)/100;
    i=principle*rate*years;
    p.innerHTML=`$${i}.00`;
    t=principle+i;
    total.innerHTML=`$${t}.00`;
    interest.innerHTML=`$${i}.00`;

}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateInterest();

    
  
   
});
