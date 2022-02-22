# Software Engineering Immersive: Project 1

![homepage](assets/Screenshot%202022-02-22%20at%2011.59.06.png?raw=true/500x500)

## Overview

This was my first project of the General Assembly Software Engineering Immersive course.
The task was to choose from a set of grid based games that could utilise array based logic, moving parts and various requirements based on the chosen game. 
I chose Space Invaders and you can play my game here: [Hands Face Space Invaders](https://mikeomerta.github.io/sei-project-one/)

## The Brief

* Render a game in the browser
* Design logic for winning & losing
* Include separate HTML / CSS / JavaScript files
* Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
* Use JavaScript for DOM manipulation
* Use best practices when developing in HTML (semantic tags etc.)

## Timeframe

7 days.

## Concept 

Space Invaders is a classic arcade game from the 80s. The player aims to shoot an invading alien armada, before it reaches the planet's surface using a mounted gun turret.

The player can only move left or right. The aliens also move from left to right, and also down each time they reach the side of the screen. The aliens also periodically drop bombs towards the player.

Once the player has destroyed a wave of aliens, the game starts again. The aim is to achieve the highest score possible before either being destroyed by the aliens, or allowing them to reach the planet's surface.

I decided to mimic the colour scheme and language of the UK Government’s Covid Awareness campaign and called my game; Hands Face Space Invaders.

From the Space Invaders brief the requirements for the game were: 

* The player should be able to clear at least one wave of aliens
* The player's score should be displayed at the end of the game

Additionally the suggested enhancements were:

* Responsive design
* Each wave gets more difficult
* Persistent leaderboard using localStorage

## Technologies Used

* HTML5
* CSS
* JavaScript
* Git & GitHub

## Approach Taken

### Planning

We had one week to complete the project, from Friday to Friday. Before writing my first line of code I wrote out the elements that I would need to build in order to get my MVP and then wrote additional stretch goals I could work towards depending on time. 

This allowed me to plan my days and what I needed to have completed by the end of each day in order to stay on track. 

I knew I had deliverables that were on the brief that needed to be completed. Namely the below:

* The player should be able to clear at least one wave of aliens.
* The player's score should be displayed at the end of the game.

I then knew to achieve these deliverables I would need certain elements. I broke them down into simple tasks that I would achieve. They were as follows:

* Create the grid for the gameplay.
* Aliens moving right to left across the grid.
* Aliens moving down one row when reaching the end of the grid.
* Fighter moving left and right one grid space depending on keystroke.
* Prevent Fighter from moving off the grid.
* Create Fighter blast to move up the column it fires from.
* Create random alien bombs dropping.
* Interaction between the Fighter blast and the Aliens/Alien bombs.
* Interaction between the bombs and the Fighter/Fighter blast.

Whilst building all these elements I knew there would be some elements I would have to slot into the build process as I went along. Predicting where they would come wasn't easy so I had a separate list of elements I wanted to add when both time and necessity aligned. This list is below.

* Start/Load button.
* Instruction button.
* Reset button.
* Scorecard and Scoring function.
* Lives Counter and Lives function.
* End of game function (this was broken down into three scenarios: player wins, player loses by being hit with alien bombs, player loses by being hit by aliens).

As I built the game I slotted in these additional elements. Sometimes it was because of necessity and the gameplay needed it but other times it was to complete a small task after a larger coding task. This both gave me a sense of achievement when a large chunk of time had been taken creating one element but also when I was struggling with the code and needed a break from the larger elements. 

Initially I had planned to complete two large elements a day and one smaller element. This time frame showed me that I would have one day to fix any elements that were not created properly and any I had forgotten. Then I would have a full day to style the game as well. 

Broadly this structure was followed but there were days where more got done and I could move ahead in my list and other days when elements took longer so I had to scale back the days deliverables.

## The Build

To build a base for the game I built a grid using DOM manipulation, where instead of building manually in HTML, I made an empty array of divs, and pushed squares into the div. I specified two variables (width and gridCellCount) which would allow me to limit the size of the grid and change it if I decided to in the future.

![codeblock](assets/Screenshot%202022-02-22%20at%2011.59.34.png?raw=true/300x300)

Once I had my grid I could start working through my list of elements that needed building. I began with focusing on the aliens first as they would be the most complicated of the moving parts as they were a large number of divs moving in tandem. I began by creating a function that moved one alien and performed the movement actions that I required. Once I had one alien moving as required I could build out the function to move all the aliens at once. 

I specifically built a Load and Start button because I visually wanted the player to see the aliens lined up ready to fight. This also allowed me to break the functions in two as well and make my code simpler and easier to read. 

![codeblock](/assets/Screenshot%202022-02-22%20at%2012.15.23.png?raw=true/400x500)

I used the setInterval method to give the impression of movement to the aliens and this method would allow me to create more difficult versions of the game in the future by speeding up the aliens. Using an if/else conditional statement allowed me to set parameters to move the aliens. Moving the aliens was based on the empty grids on a single row and by resetting the variables enemyMovementTracker and enemyMovingRight I could use the same code for each new row rather than write new code for each row. This allowed me to use the DRY principle in my code.

Additionally after each element had been written and was functioning I went through the code to refactor down my code and pull certain code blocks out of functions if they were to be repeated in different functions.  

![codeblock](assets/Screenshot%202022-02-22%20at%2012.15.34.png?raw=true/400x400)

Once I had built out my aliens moving I could focus on the fighter element of the game. This was a fairly simple piece of code as there were only three functions that the fighter could perform (left, right, fire). I used a switch statement to allow me to enter the three options that the player would use and then set a default response for any other button pushed. Once I had the switch statement working I added in a piece of code to make sure my fighter could not move off the page and break my code. 

![codeblock](assets/Screenshot%202022-02-22%20at%2012.15.42.png?raw=true/300x400)

By far the most complicated part of the code was the blast movement from the fighter and the bomb movement from the aliens.

I initially started with the fighter blast as this was the slightly more simple of the two options. I was able to get the blast to move from the position it was fired to the end of the board quite simply and I wrote a basic code to allow this to happen. The blast would move up one column adding and removing a class as it moved to show the blast. When my blast was moving from the key being pushed and moving up the grid I then had to write an if/else if conditional statement to go through all the options that the fighter blast would encounter. Namely an encounter with the enemy and then later an encounter with an enemy bomb. 

One of my favourite parts of this code was adding a setInterval function within another setInterval function so that I could add the effect of an explosion when the fighter blast hit an enemy or bomb.

The enemy bomb code and the fighter blast code are very similar with a few small differences and they are very interlinked pieces of code. This meant that I needed to have a basic version of the enemy bomb code written so that I could complete the fighter blast code. I wrote a simple code using the Math.random function to get the bombs to be dropping at random so I could then finish the fighter blast code when it struck an enemy bomb.

At then end of writing the fighter blast and enemy bomb code, I was able to go back and add additional pieces of code that gave the player a better experience, this being the score card and the lives meter.

![codeblock](assets/Screenshot%202022-02-22%20at%2012.15.52.png?raw=true/300x600)

With the fighter blast code written, I was able to use some of the already written code to fill out my enemy bomb code as their behaviours were very similar. However, the number of bombs meant that the code would be slightly more complicated as I had more variables happening at the same time compared to the fighter blast. 

Once again I used an if/else if conditional statement and multiple setInterval functions in order to remove and add classes to the grid. The challenging part of the code was writing the code to ensure that the single enemy bomb dissappeared from the screen rather than all the enemy bombs. As each bomb was being created using a setInterval function there were numerous functions running and being launched at the same time. I had to clear the interval of the bomb that had encountered the fighter blast or the fighter. I had to do some reading and seek assistance from the TA to help me write the code to clear the interval using the dataset and the position of the bomb. This code had to be written in the fighter blast code in the end to make it function as required.

![codeblock](assets/Screenshot%202022-02-22%20at%2012.16.03.png?raw=true)

When the main components of the game were written and functioning I was able to refactor code where I could, as I had been trying to do throughout the coding. I was also then able to add the additional elements to the code to make it a better experience for the player. 

This was the scoring, loss of life, game over functionality, and finally the reset and instruction buttons.

I had planned out some time for the styling as I knew there would be some elements that would take time to complete. I always wanted it to look like an old school arcade game so I purposely looked for sprites that were more pixelated and this extended to the style of the buttons I chose. 

I wanted the colour scheme to match that of the UK Government’s Covid Awareness campaign and it lent itself to a simple style that suited the more retro nature of the game. Additionally, I found a Space Invaders font tool that allowed me to make my header in the original Space Invaders style. 

![codeblock](assets/Screenshot%202022-02-22%20at%2012.16.12.png?raw=true)

## Challenges

I had some real issues with the interactions between the fighter blast and the enemy bombs. I had a bug in which the fighter blast and enemy bomb never disappeared when they hit each other. In the end with some help from my TA we worked out that there were two separate events happening. When the fighter blast hit an enemy bomb and then when an enemy bomb hit a fighter blast. After console log the occurrences it was clear to see that they were two different events and my original code wasn’t working because of this. I wrote two separate pieces of code to try and rectify the bug but for some reason the fighter blast code would break with the insertion of the code. 

Overall the project was enjoyable and I found the challenges interesting and they stretched my knowledge and skill. However there were times over the weekend when we didn't have any instant assistance and also near the deadline where I was frustrated about functions that were not working 100% correctly. During the project I also spent some time on Zoom with other students so we were all working together and sharing ideas if any of us were stuck. I definitely found that incredibly helpful but there is also a tendency to see all the progress one of your fellow students has made and compare it to your lack of progress. I definitely took that away with me for the other projects on the course and learned not to compare my process and code to theirs. 

## Wins

Adding my own spin on the game felt like a win to me and made the whole process more fun when writing the code. I mentioned it already, but adding the additional setInterval function to have a delayed explosion was something that came easily and was really fun to have thought of. 

I am also happy with the code and how it is easy to read. Refactoring as I went along is something I definitely think is part of my coding style and something I continued with the other projects I made.

## Key Learnings

I would say that the three things I took away from the project were the following:

* Planning ahead, splitting the tasks into the days available and working towards an MVP as a minimum. 
* Keeping my code consistent, clean and orderly. Refactoring when I had completed an element to help reduce repeating code. 
* Having smaller elements to build that I could turn to for a break from large element coding or to give me something else to think of when I was stuck on a part of the project. 

## Known Bugs

There is still an occasional issue with the Fighter Blast. The Fighter Blast sometimes does not disappear when striking an Alien Bomb. This does not occur every time and finding a way to isolate the bug was too time consuming and in the end I had to deploy the game with the bug. It occurs perhaps one in ten times a Fighter Blast hits an Alien Bomb but the bomb does dissappear so it was a bug I had to let go in order to complete the game. 
Future Improvements
I would like to make different levels of the game to allow there to be an easy, medium and hard level. I would like to make the game mobile responsive because currently it was created on a large monitor I have and when I go to play it on smaller screens you lose some visibility of the design outside of the grid.

I would like to create pop ups for the game over function and for the instructions. I would like a homepage/pop up as well that appears first as the game is loaded. This would contain the instructions perhaps or some story about that game. 

Finally, I would like to add audio to the game to elevate the gameplay. 

![codeblock](assets/Screenshot%202022-02-22%20at%2012.16.22.png?raw=true)













