window.addEventListener("load", function() {
  let form = document.querySelector("form");
  // let resetBtn = document.getElementById("reset");
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

    // favResults.removeAttribute("class");
    event.preventDefault(); 

    let favThingsArray = [];
    const favAnimalArray = document.querySelector("li#favAnimal").innerText;
    const favColorArray = document.querySelector("li#favColor").innerText;
    const favFoodArray = document.querySelector("li#favFood").innerText;
    const favPlaceArray = document.querySelector("li#favPlace").innerText; 
    favThingsArray = [favAnimalArray, favColorArray, favFoodArray, favPlaceArray]; 
    // console.log(favThingsArray); 
    
    let firstNewArray = [];
    firstNewArray.push(favThingsArray[0], favThingsArray[1], favThingsArray[2])
    console.log(firstNewArray); 

    let body = document.querySelector("body");
    let ul = document.createElement("ul");
    body.append(ul);
    let liElement1 = document.createElement("li");
    liElement1.append(favThingsArray[0]);
    body.append(liElement1);
    let liElement2 = document.createElement("li");
    liElement2.append(favThingsArray[1]);
    body.append(liElement2);
    let liElement3 = document.createElement("li");
    liElement3.append(favThingsArray[2]);
    body.append(liElement3);
    ul.append(liElement1); 
    ul.append(liElement2);
    ul.append(liElement3);
  })

  // resetBtn.addEventListener("click", function() {
  //   favResults.setAttribute("class", "hidden");
  //   document.getElementById("favAnimal").value = null;
  //   document.getElementById("favColor").value = null;
  //   document.getElementById("favFood").value = null;
  //   document.getElementById("favPlace").value = null; 
  // });

});
