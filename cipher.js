function clearKey(id) {
  document.getElementById(id).value = "";
}

function goCaesar(txtId, keyId) {
  var plnStr = document.getElementById(txtId).value;
  var cphStr = "";
  var key = document.getElementById(keyId).value;

  document.getElementById('ciphertext').innerHTML = cphStr;
}
