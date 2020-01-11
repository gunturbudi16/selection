function checkKata(kataSatu, kataDua) {
  var obj = {};
  let con = 0;
  for (let i = 0; i < kataSatu.length; i++) {
    for (let j = 0; j < kataDua.length; j++) {
      if (kataSatu[i] == kataDua[j]) {
        obj[kataSatu[i]] = true;
      }
    }
  }
  for (var key in obj) {
    con++;
  }
  if (con == kataSatu.length) {
    return true;
  } else {
    return false;
  }
}
function findSame(arr) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i].length == arr[j].length) {
        if (checkKata(arr[i], arr[j])) {
          result.push(arr[i]);
          result.push(arr[j]);
        }
      }
    }
  }
  if (result.length == 0) {
    return "tidak ditemukan";
  }
  return `${result}`;
}

console.log(findSame(["cat", "listen", "code", "act", "silent", "tac"])); //cat, act, tac,listen, silent

console.log(findSame(["tyr", "fire", "dark"])); //tidak ditemukan
