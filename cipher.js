function clearKey(id) {
  document.getElementById(id).value = "";
}

function getAlphaIdx(code) {
  //TODO add ASCII range for upper & lower
  var idx = 0;
  if (true) {
    idx = code - 97;
  } else {
    idx = code - 65;
  }
  //TODO set & return bool isLower
  return idx;
}

function getNewIdx(idx, key) {
  var newIdx = (idx + key) % 26;
}

function getCharCode(idx) {
  //TODO how to preserve upper/lowercase? add a bool?
  var isLower = true;
  if (isLower) {
    var newCd = idx + 97;
  } else {
    var newCd = idx + 65;
  }
  return newCd;
}


function goCaesar(txtId, keyId) {
  var plnStr = document.getElementById(txtId).value;
  var cphStr = "";
  var key = parseInt(document.getElementById(keyId).value);
  var currChar = "";
  var newChar = "";
  var currCd = 0;
  var newCd = 0;
  var currIdx = 0;
  var newIdx = 0;

  for (var i = 0; i < plnStr.length; i++) {

    //TODO test if alpha char
    if (true) {
      currChar = plnStr[i];
      chCd = plnStr.charCodeAt(i);
      currIdx = getAlphaIdx(chCd);
      newIdx = getNewIdx(currIdx, key);
      newCd = getCharCode(newIdx);
      newChar = String.fromCharCode(newCd);
      cphStr += newChar;
    } else {
      cphStr += currChar;
    }
  }
  console.log(cphStr);
  document.getElementById('ciphertext').innerHTML = cphStr;
}
