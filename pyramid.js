function clearInput(id) {
  document.getElementById(id).value = "";
}

function setInstructions(id) {
  document.getElementById(id).value = "Enter a number.";
}

function buildPyramid() {
  var height = document.getElementById('height').value;
  alert(height);
}

function goToAbout() {
  window.location.href = "about.html";
}

function goToIndex() {
  window.location.href = "index.html";
}
