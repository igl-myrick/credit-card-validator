function checkSum(num) {
  let inputArr = num.split("");
  let oddArr = [];
  let evenArr = [];
  inputArr.forEach(function(element, index) {
    if (index % 2 === 0) {
      evenArr.push(element);
    } else {
      oddArr.push(element);
    }
  });
  const doubledArr = oddArr.map(function(number) {
    let result = number * 2;
    if (result > 9) {
      let arrToAdd = result.toString().split("");
      return parseInt(arrToAdd[0]) + parseInt(arrToAdd[1]);
    } else {
      return result;
    }
  });
  let outputArr = evenArr.map(function(element) {
    return parseInt(element);
  });
  doubledArr.forEach(function(element) {
    outputArr.push(element);
  });
  const sum = outputArr.reduce((a, b) => a + b);
  return sum;
}

checkSum("4102080860435620");