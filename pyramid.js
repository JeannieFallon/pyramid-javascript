function clearInput(id) {
  document.getElementById(id).value = "";
}

function setInstructions(id) {
  var input = document.getElementById(id);
  if (input.value == "") {
    input.value = "NUMBER, PLEASE!";
  }

  //document.getElementById(id).value = "Enter a number.";

}

function buildPyramid() {
  //var height = document.getElementById('height').value;
  //alert(height);

  window.location.href = "pyramid.html";

}

function goToAbout() {
  window.location.href = "about.html";
}

function goToIndex() {
  window.location.href = "index.html";
}
