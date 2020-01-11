function randomize(input) {
  let arr = [],
    angka = 1,
    sum = 0;

  while (arr.length < input) {
    if (angka % 2 == 1) {
      arr.push(angka);
      sum += angka;
    }
    angka++;
  }
  return `array : [${arr}] sum : ${sum}`;
}
console.log(randomize(5));
console.log(randomize(10));
