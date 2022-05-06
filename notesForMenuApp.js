/* this is the class that constructs a player by taking a name and a position.





this is a method of the class player that provides information about the player.  made with a template literal



creating a new class for the templat
constructor takes just the team name
this.players creates a new array of players of the team



a new method that checks to see if the player is an instance of our player class.  that way our player is actualy a player itself and not some arbitrage nonsense.

this line will push the player to the player array if true
this cathes our error if above is not true and returns error message of exactly what they did wrong with the code




a new methd that does the same as our player class but for our team. prints out name of team and number of players on the team




this is the class that drives the application and all the choices
the constructor of our menu that does not take any arguments but initializes our teams as an array

this creates a new variable for whichever team is sleected. set to null because when we start no teams are sleected

a new method of our menu that starts up the menu application.  the entry point 
here we are using methods that don't exist yet to build out the menu and then we will impliment the methods (top-down approach)
while loop to check which option in our menu has the user selected, then returns the value that the user has selected (reason for swith statment)
switch takes a look at the selection (user input)
if they selected one do this...


if they selected  2 do this


if they selected 3 do this


if they selected 4 do this


if they selected any other number then do this


outside of the switch we want to geth the selection again while we are still in the loop so that it keeps looping as long as we dont select 0 or something between 1-4.  


if they did select 0 then do this. 0 means we are not out of the loop check the condiotion of while 

now we need to program the above methods that are within the application
creating a method that returns a prompt- this returns the input that comes back from the prompt.  built with a template literal









this takes the description of the team (teamInfo) then prints out the info and then returns a prompt





this displays the team info that was passed in




here we need to build a string that has all the information for the string to alert in a prompt or message box
a for loop to iterte through the entire list of teams 
sets the teamString variable = to the index position of each team. this.teams[i].name grabs the current team that we are looking at for this iteration. +'\n' adds a new line after each team (on a new line)

once we get through the for loop alert our teamString- so we can see all the teams


this method creates a team
asks user to input the name of the team
this.teams (the array where we keep all of our teams) .push(new Team(name)) adds in the new teamto the teams array


now we want to see the details of a specefic team
asks the user what team they wish to view based on index location
this adds validation to make sure index value is within the length of teams array.ALWAYS VALIDATE USER INPUT
now we set our selected team class property to the team that was input by the user.
this builds a description of the team to print out with a new line

now we want to add the description of all the players to the team. for loop to acomplish this to iterate through list of players array within the selected team
this adds on to our description(+=) i -prints ot the index and the specefic player name as well as position ads new line as well

here we are using top down again to pass in the recently constructed description and display the team while showing all the options for the team
switch that takes in selection as a submenu
this is where we are able to create a new playerof a team


where we can delete a player of a specefic team (more methods we need to create)

possibly may need a default for switch- not added



this sets a new method to delete a team
sets the index variable equal to a user input
this validates that the user input is found within the teams array




here we are adding outside the view team method and adding a new createplayer method
this sets the name varable to be set to what the user inputs in prompt
this sets the position to the input of the user from prompt
now we can take the name and the player to create an instance of player and push it to whichever team is selected.  this is why we use the selected team variable to know at anytime which team is selected.  we push in the new player name and the position which we just got from the user.


a new method to delete a player
index is set equal to the index position of desired player
this validates the user input from line above to make sure user input is found within the player array length
this removes the user selected player and removes the element from the players array.




here we are creating an instance of our menu
calling the menu.start function to be ran

*/