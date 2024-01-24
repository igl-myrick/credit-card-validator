# _Credit Card Validator_

#### By _**India Lyon-Myrick**_

#### _A program for validating credit card numbers._

## Technologies Used

* _JavaScript_

## Description

_A practice project JavaScript function for validating credit card numbers using the Luhn Algorithm._

## Setup/Installation Requirements

* _Clone the repository to a folder of choice on your machine (by either using the "Code" button on the GitHub page, or in a terminal application using `git clone https://github.com/igl-myrick/credit-card-validator`)_
* _Using a file explorer or terminal application, open the top level of the folder_
* _Open index.html_

## Known Bugs

* _None_

## License

MIT:

Copyright (c) _1/24/2024_ _India Lyon-Myrick_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Tests

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