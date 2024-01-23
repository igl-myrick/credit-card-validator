function checkSum(num) {
  let inputArr = num.split("");
  let toModifyArr = [];
  let unmodifiedArr = [];
  let cardCompany;
  if (inputArr.length === 15 && (inputArr[0] === "3" && (inputArr[1] === "4" || inputArr[1] === "7"))) {
    cardCompany = "American Express";
    inputArr.forEach(function(element, index) {
      if (index % 2 === 0) {
        toModifyArr.push(element);
      } else {
        unmodifiedArr.push(element);
      }
    });
  } else if (inputArr.length === 16) { 
    if (inputArr[0] === "4") {
      cardCompany = "Visa";
    } else if (inputArr[0] === "5") {
      cardCompany = "Mastercard";
    } else if (inputArr[0] === "6") {
      cardCompany = "Discover";
    } else {
      cardCompany = "unknown";
    }
    inputArr.forEach(function(element, index) {
      if (index % 2 === 0) {
        unmodifiedArr.push(element);
      } else {
        toModifyArr.push(element);
      }
    });
  } else {
    cardCompany = "unknown";
  }
  if (cardCompany === "unknown") {
    return "This card number is not valid.";
  } else if (cardCompany !== "unknown") {
    const doubledArr = toModifyArr.map(function(number) {
      let result = number * 2;
      if (result > 9) {
        let arrToAdd = result.toString().split("");
        return parseInt(arrToAdd[0]) + parseInt(arrToAdd[1]);
      } else {
        return result;
      }
    });
    let outputArr = unmodifiedArr.map(function(element) {
      return parseInt(element);
    });
    doubledArr.forEach(function(element) {
      outputArr.push(element);
    });
    const sum = outputArr.reduce((a, b) => a + b);
    const checkLuhn = sum.toString().split("");
    if (checkLuhn.at(-1) === "0") {
      return ("This " + cardCompany + " card number is valid.");
    } else {
      return ("This " + cardCompany + " card number is not valid.");
    }
  }
}