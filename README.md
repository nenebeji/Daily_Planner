# Daily Planner

![screencapture-file-Users-nenebeji-Documents-bootcamp-challenges-Daily-Planner-index-html-2022-08-02-23_09_02](https://user-images.githubusercontent.com/105363883/182482156-296b7ba4-09a3-4e07-9e50-0aa3a7151479.png)

> Time Organiser!

## Table of Contents

- [Project Description](#project-description)

  - [Problems Solved](#problems-solved)

- [Screenshots](#screenshots)

- [Usage](#usage)

- [How to Contribute](#how-to-contribute)

- [Tests](#test)

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


URL for application:

https://nenebeji.github.io/Daily_Planner/
