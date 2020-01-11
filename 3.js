const formatInput = (str, ...rest) => {
  let result = [];
  const arrStr = str.split(" ");

  for (let i = 0; i < arrStr.length; i++) {
    const isNumber = arrStr[i].match(/\d+/g);

    if (isNumber == null) {
      result += arrStr[i] + " ";
    }

    if (isNumber != null) {
      if (arrStr[i].includes(isNumber[0])) {
        result += arrStr[i].replace(arrStr[i], rest[i - 1]) + " ";
      }
    }
  }

  return result;
};

console.log(formatInput("Hello {0} {1}", "Guntur", "Fighters!"));
console.log(formatInput("This is an {2}", "Halangan", "Rintangan", "Exercise"));
