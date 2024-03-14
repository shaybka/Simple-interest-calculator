
let principleInput = document.querySelector("#amount");
let timeyInput = document.querySelector("#years");
let timemInput = document.querySelector("#month");
let rateInput = document.querySelector("#rate");
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    principleInput=Number(principleInput.value);
    console.log(principleInput);
  
   
});
