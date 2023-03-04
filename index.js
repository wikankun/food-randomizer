window.onload = function loadFoods() {
    foods = document.getElementById("food-list");
    foods.innerHTML = "bakso ayam\nmie jawa\nmie ayam\nayam cabe garam\nayam suwir sambal matah\nnasi uduk ayam goreng";
    console.log("load done")
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function formatOutput(array) {
    
}

function randomize() {
    foods = document.getElementById("food-list").value;
    n = document.getElementById("n-result").value;

    fl = foods.split("\n");
    fl = shuffle(fl);

    foodResult = fl.slice(0, n).join("</br>");
    result = document.getElementById("result");
    result.innerHTML = foodResult;
}