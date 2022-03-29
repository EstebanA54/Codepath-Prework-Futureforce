# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Esteban Ayala**

Time spent: **16** hours spent in total

Link to project: (https://glitch.com/edit/#!/messy-lateral-gander)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Change website icon

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![Game Loss](https://media.giphy.com/media/f9cFlyR9bARSW8VBrP/giphy.gif)Game Loss
![Game Win](https://media.giphy.com/media/8u1FPANXjgMoL6gfKw/giphy.gif)Game Win
![Timer Loss](https://media.giphy.com/media/bXHjH7DZJDHC3tJ5xD/giphy.gif)Timer Loss
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://stackoverflow.com/questions/42396737/html5-audio-player-error-the-provided-double-value-is-non-finite
https://stackoverflow.com/questions/17636310/play-audio-and-restart-it-onclick
https://www.w3schools.com/css/css3_images.asp
https://www.w3schools.com/jsref/met_audio_play.asp
https://www.w3schools.com/cssref/pr_background-image.asp
https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element
https://www.w3schools.com/tags/tag_img.asp
]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[A challenge that I encountered was trying to make the custom clue noise that I implemented to work with the clue pattern.
 When I first started to work on this optional step I first tried just replacing the audio sound of the button however I figured out very quickly that the original noises were still playing.
  After being stuck for a while I researched a bit on the subject and after that, I came up with the solution to completely change the StartTone function by saying that if a person presses button 1 it will match the assigned sound in my case the xatu sound. 
  After testing that solution it worked and I used that solution for the rest of the buttons. Another challenge that I came across was the decreasing time as the pattern goes on.
   At first, I thought this step was going to be simple and although the code used was figuring out how much I needed to decrease by each turn was much more of a challenge.
   I solved this challenge by using trial and error I started by going down in intervals of 100 then after that cutting, the time decreased in half until I got to the time that worked for me which was 10.
    I also figured out that I would need to reset the time to 1000 every time I started the game which wasn't hard but figuring out where to place the code took some trial and error once again.
    Although these two challenges took a long time it was a great learning experience in helping me troubleshoot later issues I had working on this project.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[Some questions about web development that I had after doing this project was If I had known some of the technologies that the SITE program is going to teach would it make it easier?
 I had this question once I started researching and some ways to tackle some of the problems I was having was using these technologies mainly regarding the audio issue I was having.
  Another question that I had was Do different ways of implementing a feature for example using CSS instead of HTML for the button pictures have any drawbacks?
   I had this question because after using CSS to implement my pictures on my buttons I saw there was another way to do that using HTML and since the CSS method was really simple I was wondering if it had any drawbacks.
]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had more hours to work on the project I would use them to implement new features and make some quality of life changes. 
Two examples of features I would implement would be a difficult setting as well as a volume slider. 
The reason I would add the volume slider would be in case the sounds I chose for the game were too loud since everyone has their own audio preferences so that they could change them.
 For the difficult setting, I would implement it because it would add a bit more depth to the game itself as if the player wishes to play the game multiple times they can do so and add a bit more difficulty at the same time.
  For the quality of life change, I would add it to where while a clue is playing the player would not be able to press buttons because I found out while playing the game that if I did that it would bug out the game a bit.
]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://utrgv.zoom.us/rec/share/MsGRuZHRD4-eDQMgzAJsmHhseVNcbJUTV2z39prm2uPBf-dFkoWO_tnhHqIOuIVp.xbl4WyYvpu6jbenD?startTime=1648496806000)


## License

    Copyright [Esteban Ayala]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
