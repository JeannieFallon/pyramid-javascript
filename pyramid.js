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
  //TODO pass variable as cookie? or use window.open()?
  window.location.href = "pyramid.html";
}

function goToAbout() {
  window.location.href = "about.html";
}

function goToIndex() {
  window.location.href = "index.html";
}
