window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let resetBtn = document.getElementById("reset");
  let favResults = document.getElementById("favResults");

  form.addEventListener("submit", function(event) {
    const favAnimal = document.getElementById("favAnimal").value;
    const favColor = document.getElementById("favColor").value;
    const favFood= document.getElementById("favFood").value;
    const favPlace = document.getElementById("favPlace").value;

    document.querySelector("li#favAnimal").innerText = favAnimal;
    document.querySelector("li#favColor").innerText = favColor;
    document.querySelector("li#favFood").innerText = favFood;
    document.querySelector("li#favPlace").innerText = favPlace;

    favResults.removeAttribute("class");
    event.preventDefault(); 

  })

  resetBtn.addEventListener("click", function() {
    favResults.setAttribute("class", "hidden");
    document.getElementById("favAnimal").value = null;
    document.getElementById("favColor").value = null;
    document.getElementById("favFood").value = null;
    document.getElementById("favPlace").value = null; 
  });
});