![logo](https://raw.githubusercontent.com/HereNotThere/react-fe-challenge/main/src/assets/hnt_logo_small.png)

## Description

This project is designed to test your knowledge of front-end web technologies
and assess your ability to create front-end UI products with attention to
details, standards and user-experience.

## Assignment

The goal of this exercise is to create a simplified version of the MacOS
calendar in React like the screenshot below.

You should start by rendering a single month view of a calendar for the current month.

![calendar](https://raw.githubusercontent.com/HereNotThere/react-fe-challenge/main/src/assets/layout.png)


## Mandatory features

- Calendar to match as close as possible the suggested layout
- Ability to add "_reminders_" (max. 30 characters) - Double-clicking a date
  opens a modal like in the screenshot.
- Ability to edit reminders by double clicking the reminder- including
  changing title, description.
- Ability to delete a reminder by selecting and hitting Backspace

## Bonus (Pick 2 minimum)

- Dark / Bright mode switch
- Ability move tasks on the calendar by drag and drop
- Ability to pick the color from a palette of 6 colors (bespoke UI)
- Expand the calendar to support more than the current month or year using the
  same scrolling mechanism as MacOS Calendar.
- Enable reminders with start - end date spanning across several days.
- Unit test the functionality: *Ability to add "*reminders*" (max. 30 characters) for a day and time specified by the user. Also, include a description.*

## Deliverables

A .zip file containing the full source-code of the assignment based on the current repo. Please exclude `node_modules`.

## Considerations

- The project is completely focused on Front-end. Ignore the Back-end.
- Target modern browsers only
- Create your Calendar using the route `/calendar`
- Feel free to use small helper libraries for Date/Time handling.
- **You must create the calendar component yourself**. Do not user calendar libraries like FullCalendar or Bootstrap Calendar.
- Show us your capabilities on CSS and styling, we have added SASS support but
  please feel free to use any CSS in JS solution you are comfortable with.
- We have implemented Redux thunk for state management, but you may use any state manager you are familiar with.

# How to deploy

- Run `npm install` | `yarn install` to install all dependencies.
- Run `npm start` | `yarn run` to run the app locally.
- You can find the project running on `localhost:3000`.
