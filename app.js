const display = document.getElementById("display");

window.addEventListener("deviceorientationabsolute", function(e) {    
    display.textContent = `alpha=${~~e.alpha}  beta=${~~e.beta}  gamma=${~~e.gamma}`;
    console.log(e)
});