function clearKey(id) {
  document.getElementById(id).value = "";
}

function getIdxLower(code) {
  return code - 97;
}

function getIdxUpper(code) {
  return code - 65;
}

function getCodeLower(idx) {
  return idx + 97;
}

function getCodeUpper(idx) {
  return idx + 65;
}

function getRotIdx(idx, key) {
  var newIdx = (idx + key) % 26;
  return newIdx;
}

function goCaesar(txtId, keyId) {
  var plnStr = document.getElementById(txtId).value;
  var cphStr = "";
  var key = parseInt(document.getElementById(keyId).value);
  var currChar = "";
  var newChar = "";
  var code = 0;
  var newCd = 0;
  var currIdx = 0;
  var newIdx = 0;
  var isLower = false;

  for (var i = 0; i < plnStr.length; i++) {

    //TODO test if alpha char
    if (true) {
      code = plnStr.charCodeAt(i);
      if (code >= 97 && code <= 122) {
        currIdx = getIdxLower(code);
        newIdx = getRotIdx(currIdx, key);
        newCd = getCodeLower(newIdx);
      } else {
        currIdx = getIdxUpper(code);
        newIdx = getRotIdx(currIdx, key);
        newCd = getCodeUpper(newIdx);
      }
      newChar = String.fromCharCode(newCd);
      cphStr += newChar;
    } else {
      cphStr += currChar;
    }
  }
  document.getElementById('ciphertext').innerHTML = cphStr;
}
