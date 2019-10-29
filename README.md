# Simon Game 

Simon (game) Simon is an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison, working for toy design firm Marvin Glass and Associates, with software programming by Lenny Cope. The device creates a series of tones and lights and requires a user to repeat the sequence.[source](https://en.wikipedia.org/wiki/Simon_(game))
 
## UX
 
The purpose of this website is to create a challenging experience for all ages.

## User Stories
- As a user I want to be presented with a random series of button presses.  
- As a user I want to be able to choose level of difficulty to play the game. 
- As a user I want to see what level I have reached on the game. 
- As a user I want to get feedback if I have lost/won the game. 
- As a user I want to be able to hide the instructions if I wish. 

- Wireframe created using Balsamiq - saved in Assets Folder

 
### Existing Features
- 20 Level Game 
- Normal or Strict Mode 
    - When in Normal mode if incorrect move is made the player has to redo previous level. 
    - When in Strict mode if incorrect move is made player has to start the game from the beginning.
- The user cannot click the coloured pads befor the game starts or during the computers turn.
- The user can view or hide game instructions for a better user experience. 

### Features Left to Implement
- Add different levels of difficulty as in Original game with 4 levels of difficulty with increasing speed of flasing lights and increase number of levels. 
- Add new sound when player wins or loses the game. 
- Add a feature such as fireworks when player wins the game. 

## Technologies Used

- [Bootstrap 4](https://getbootstrap.com/)
    - Responsive Grid with Flexbox and Styling
- Javascript
    - 
- [JQuery](https://jquery.com)
    - To simplify DOM manipulation.
- [Jasmine](https://cdnjs.com/libraries/jasmine)
    - JavaScript testing Framework 


## Testing

Testing was complete through Google developer tools. Ensuring that columns and rows were displayed correctly on implementation and changing css as needed to ensure UX Design was as close to wireframe as possible. After instructions were added there was an overlap problem with the gameboard so to combat this problem the easiest solution was to move instructions to the top of the page and introduce a show/hide function through jQuery slideToggle so as not to impact the users ability to play on smaller devices. 

On testing the game in FireFox there is errors with the checkboxes as they are not styled as in Google Chrome and Safari.

JavaScript and Jquery tests through console log
 - On/Off - on = true off = false
 - Strict - on = strictTrue off = strictFalse 
 - Start - on = startTrue off = startFalse
 - Random Number Generator = Console Log Order - generates numbers between 1 and 4 and increments 1 untill it reaches 20 which is the number of levels to Win

I have attempted to include Jasmine testing in this project, as I do not fully understand how to test I have left the basic setup to be completed at a further date. 




## Deployment

This project was created through Visual Studio Code and pushed to Github with [Desktop Github](https://desktop.github.com/) then deployed to both github and heroku.
- Github [Simon Game](https://gillianmcdonnell.github.io/Interactive-Frontend-Development-Simon-Game-Re-Submit/) 
- Heroku [Gillians Simon Game](https://gillians-simon-game.herokuapp.com)


## Credits
- [FreeCodeCamp](https://www.youtube.com/watch?v=n_ec3eowFLQ&t=3309s) any elements of javascript copied are noted in index.js. 

### Content
- Instruction content was written according to game function.
- Design was inspired from original game and [FreeCodeCamp](https://www.youtube.com/watch?v=n_ec3eowFLQ&t=3309s) 
- CSS Design was inspired by [Emanuele](https://codepen.io/Em-Ant/pen/QbRyqq)



### Acknowledgements

- I received inspiration from this project from [FreeCodeCamp](https://www.youtube.com/watch?v=n_ec3eowFLQ&t=3309s) 
- Deployment to heroku[deploy-static-site-to-heroku](https://gist.github.com/wh1tney/2ad13aa5fbdd83f6a489)