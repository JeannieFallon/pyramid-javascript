function clearKey(id) {
  document.getElementById(id).value = "";
}

function goCaesar(txtId, keyId) {
  var plnStr = document.getElementById(txtId).value;
  var cphStr = "";

  var key = document.getElementById(keyId).value;

  var currChar = "";

  for (var i = 0; i < plnStr.length; i++) {
    currChar = plnStr[i];

    var chCd = plnStr.charCodeAt(i);
    console.log(chCd);

    var newCd = chCd + parseInt(key);

    console.log(newCd);

    var newChar = String.fromCharCode(newCd);

    console.log(newChar);
    console.log("break");

    cphStr += currChar;
  }

  document.getElementById('ciphertext').innerHTML = cphStr;
}
