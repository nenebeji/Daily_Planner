# Daily Planner
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Project Description](#project-description)

  - [Problems Solved](#problems-solved)

- [Screenshots](#screenshots)

- [Usage](#usage)

- [How to Contribute](#how-to-contribute)

- [Tests](#tests)

- [Questions](#questions)

- [License](#license)


## Project Description

This is a simple calender application that allows a user to save events for each hour.

* When a user opens the daily planner, the current day, date and time is displayed at the top of the page.

* When a user scrolls down, the user is presented with timeblocks for standard business hours.
* * Each time block is colour coded to indicate whether it's past(grey), present(red) and future(green).

* A user can click into each timeblock and enter an event.

* A user can save each event to local storage by clicking on the save button next to each timeblock.

* When a user refereshes the page, the saved events persists.

### Problems Solved

* First made sure all the classes in the html matched the classes in the css.

* Created a storeItem() in js for storing each event in the local storage on.click.

* Added data attribute: data-time to each time block to enable specific selection in js.

* Selected the data-time attr in js and selected specific section to add colour: this took some time but eventually figured it out, after several trial and errors.

## Screenshots

![Webpage Image](/assets/images/dailyplanner.png)
> Screenshot

## Usage

Click the link below to open the web page:

https://nenebeji.github.io/Daily_Planner/

## How to Contribute

1. Clone the repo using $ git clone git@github.com:nenebeji/Daily_Planner

2. Create a new branch $ git checkout -b your name 

3. Make Changes and test 

4. Submit a pull request with description for review

## Tests

Tests were run using console and browser page.

## Questions

Feel free to contact me for further questions via:

Github: https://github.com/nenebeji

Email: nenebeji@gmail.com

## License

The MIT License

  
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

For more informaation you can click the link below:

https://opensource.org/licenses/MIT

Copyright (c) 2022 Oritsegidenene Beji.