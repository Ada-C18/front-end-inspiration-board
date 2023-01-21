# Front-End Inspiration Board
## Overview
Part of a full-stack project involving four team members. Completed in 8 days (including planning time) over three weeks.<br /><br />
**Front-end owners:** [@kalawac](https://github.com/kalawac/), [@annalord](https://github.com/annalord/)<br />
**Back-end owners:** [@emilyiscoding](https://github.com/EmilyIsCoding/), [@bukunmig](https://github.com/BukunmiG/)<br />
### Related Links
- [Deployed project](http://hackspoboard.herokuapp.com/)
- [Back-end repo](https://github.com/EmilyIsCoding/back-end-inspiration-board/)<br />
- [Ada C-18 repo with general full-stack project overview and requirements](https://github.com/Ada-C18/full-stack-inspiration-board)

## Basic Full-Stack Project Requirements
### Goal
Create a digital inspiration board

### Features

### UX Summary: Feature Requirements
Users should be able to create one or more boards.<br />
<br />
Once a board is created, users should able to select a single board. Users should be able to create new cards for the selected board. When a user selects a board, they should be able to see all the cards associated with that board.<br />
<br />
Users should be able to "+1" the cards that they agree with and see the total number of "+1"s on a single card.

### UX Summary: Our Additional Features
#### Login and Sign Up
- Users should be able to sign up for site access with a username
- Users should be able to log in with a username that is not case-sensitive
- Usernames should be unique to a single user

#### Boards
- Users should be able to sort the board list by most recent, popularity (number of cards) and board owner
- Users can choose a card color when creating a board; cards on that board should populate in the selected color theme

### Detailed Feature Requirements (from [Ada-C18/full-stack-inspiration-board](https://github.com/Ada-C18/full-stack-inspiration-board/blob/main/project-requirements.md))

Teams may:
- Interpret the features however you'd like<br />
- Style the web app however you'd like, as long as it's usable<br />

#### Create & Read Boards

As a user, I want to be able to...

##### Create

- Create a new board, by filling out a form. The form includes "title" and "owner" name of the board.
- See an error message if I try to make a new board with an empty/blank/invalid/missing "title" or "owner" input.
- All error messages can look like a new section on the screen, a red outline around the input field, and/or disabling the input, as long as it's visible
- Hide the "New Board" form, so I don't have to see the "New Board" form all the time when I'm looking at cards.

##### Read

- View a list of all boards.
- Select a board.

#### Create, Read, and Delete Cards

As a user, I want to be able to...

##### Create

- Create a new card for the selected board, by filling out a form and filling out a "message."
- See an error message if I try to make the card's "message" more than 40 characters.
- All error messages can look like a new section on the screen, a red outline around the input field, and/or disabling the input, as long as it's visible
- See an error message if I try to make a new card with an empty/blank/invalid/missing "message."

##### Read

- View a list of cards that belong to the selected board.

##### Delete

- Delete an existing card.

#### +1 Feature

As a user, I want to be able to...

- Press a "+1" icon on a single card, to indicate that I agree with it.
- See the number of "+1"s on a single card. Every card starts with zero "+1"s.

### Additional Features
**Instructions from Ada:** Each team should implement one additional feature from each layer.<br />

All suggested additional features are listed below.<br />
The features we have implemented in this project are indicated by "=>".

#### Front-end Feature Options

- => Use React Router
- => Allow the user to select how to sort the cards between these options:
  - Sort by ID
  - Sort alphabetically
  - Sort by number of "+1"s

#### Back-end Feature Options

- => Write tests for the CRUD operations around the Board model
- Every time a new card is made, it sends a message to the team's public Slack channel
