# RockPaperScissors
Rock, Paper, Scissors - TOP Project

Day 1: 
- Figured out of how play the game a single time using if/else nested statements. 
- Computer randomly picks an integer between 0-2 and returns one of the three values assigned.

Day 2: 
- Filled in day 1 readme. 
- Cleaned up game function to be slightly less messy by using || and &&. 
- Eliminated the repeated TIE GAME bringing it just one. 
- It took much longer than I want to admit to loop the game 5 times. 
- Added scores to player and computer but stuck on how to return the winner.
- Added Tailwind CSS and built a basic page to start.
- Finally figured out how to return a winner and all I needed to do was call the function I made for it..I feel silly.
- Added cute github svg icon to my github.
- Over all it took a few hours to just do this. Okay, more than a few hours but im trying to keep a fire lit and the wood is wet.

Day 3:
- Started part 2 of the project trying to convert the code to work with UI
- Still haven't figured it out after a few hours. I can console.log the button id when click but cant figure out how to connect it to the playRound function..I feel like its a simple fix.
- Moved on to adding more ui element in the HTML and DOM to display the current choices.
- Added DOM for player scores but wont update.
- Added a RESET button that refreshes the page.
- Tried nesting everything in the event listener function and broke it all. Says play and computer selection is undefined.

Day 4: 
- Asked for help on TOP Discord and it took all of 5 mins to find the problem. I feel dumb.
- First, I passed the playRound function to the on click but not the arguments.
- I was also console logging the playRound function which cause it to run right away. Deleted this.
- To display the correct result, I passed the playRound with player and computer selections
- Found issue where scores are adding 2 instead of 1.

Created by HydraRetro