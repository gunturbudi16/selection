// function formatInput(string) {
//   console.log(string[0] + string[1] + string[2]);
// }
// console.log(formatInput(["Hello", " Arkademy", " Fighter!"]));

// function formatInput1(string) {
//   console.log(string[0] + string[3]);
// }
// console.log(formatInput1(["This is an", "Halangan", "Rintangan", " Exercise"]));

// function cek(par) {
//   console.log("ini Parameter 1", par);
// }
// cek("Hello {0}{1}", "Guntur", "Fighter");
function formatInput(data) {
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}
console.log(formatInput("Hello {0} {1}”, “Arkademian”, “Fighters!"));
