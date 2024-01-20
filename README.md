Describe: countSum()

Test: "It will separate elements into arrays based on whether or not the number will be modified according to the Luhn algorithm."
Code: countSum("4102080860435620");
Expected Output: [4, 0, 0, 0, 6, 4, 5, 2], [1, 2, 8, 8, 0, 3, 6, 0]

Test: "It will double every other number of the original input."
Code: countSum("4102080860435620");
Expected Output: [4, 0, 0, 0, 6, 4, 5, 2], [2, 4, 16, 16, 0, 6, 12, 0]

Test: "It will add together the sum of any double digit numbers."
Code: countSum("4102080860435620");
Expected Output: [4, 0, 0, 0, 6, 4, 5, 2], [2, 4, 7, 7, 0, 6, 3, 0]

Test: "It will merge the arrays and add each element up."
Code: countSum("4102080860435620");
Expected Output: 50

Test: "It will return a true or false statement based on whether the output ends in 0."
Code: countSum("4102080860435620");
Expected Output: "This card number is valid."

Test: "It will return the card company alongside the result."
Code: countSum("4102080860435620");
Expected Output: "This Visa card number is valid."