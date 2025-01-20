const containerE1=document.querySelector(".container");
const leftE1 =document.querySelector(".left");
const rightE1 =document.querySelector(".right");

leftE1.addEventListener("mouseenter", () => {
  containerE1.classList.add("active-left")
})

leftE1.addEventListener("mouseleave", () => {
    containerE1.classList.remove("active-left")
  })
  rightE1.addEventListener("mouseenter", () => {
    containerE1.classList.add("active-right")
  })
  rightE1.addEventListener("mouseleave", () => {
    containerE1.classList.remove("active-right")
  })
  const inputField = document.getElementById('userInput');
  const button = document.getElementById('submitButton');
  const display = document.getElementById('display');

  
  btn.addEventListener('click', function() {
      
      const userInput = inputField.value;
    
      display.textContent = `You entered: ${userInput}`;
  });

  
  document.getElementById("Appbutton").addEventListener("click", function openPopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("openPopup")
});

 


   

  
  