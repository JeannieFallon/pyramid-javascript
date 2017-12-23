function clearInput(elemId) {
  document.getElementById(elemId).value = "";
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
