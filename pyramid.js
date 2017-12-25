function clearInput(id) {
  document.getElementById(id).value = "";
}

function setInstructions(id) {
  var input = document.getElementById(id);
  if (input.value == "") {
    input.value = "NUMBER, PLEASE!";
  }
}

function buildPyramid(id) {
  var height = document.getElementById(id).value;
  var str = "";
  for (var i = 0; i < height; i++) {
    str += "*";
    str += "<br/>"
  }
  document.getElementById("pyramid-display").innerHTML = str;
}

function goToAbout() {
  window.location.href = "about.html";
}

function goToIndex() {
  window.location.href = "index.html";
}
