//the most common methodoligy on how to write code.

/* 
DVD Player
-----------
Height
Weight
Width
Color

Play
Fast Forward
Rewind
Pause

DVD
--------
Movie Length
Image
Size

-Begin to think of things as moveable objects, how can you break down what the purpose of an object is.

Abstraction- allows us to hide complexity (ex. all vehicles move- taking the concept of motion and generalizing a statement) taking the bits and pieces of what you need from n idea

Capsulation- Hiding the details of how a method works. (ex. when you drive a car you dont know what exactly the engine is doing.  The functionality is understood to basic concept- movement)

Inheritance-  Objects will inherit properties and functionality from other classes.parents can pass down their properties or functionality

Polymorphism- something can take multiple different forms (ex. a dog talks different than a cheetah.  the communication method is what differs.  They are both animals but communicate differently.){overwriting and overloading- you can accept any type of intiger ex..  if intiger is type"" do this}

Classes-  used to group code together in a logical way.  Objects can be created from classes.   (the blueprint) an object factory

Object- an instance of a class also called an instance (the house)
they have attributes that define them and things that they can do

Video on Classes-
extremely useful when needing to group properties and functionality together to create a representation of an object. Classes follow a pascall naming methodology as compared to camelCase

this keyword is used to specify the field within the instance

constructor operator allows us to build objects from our class (blueprint)
constructors are much more effecient for setting up each object within class 

When to create a class?? - - each class should be in charge of one thing.  anytime you have a new concept that needs properties and functionality create a new class for it

instanciation- when you create a new instance within a class

*/

class student{
    constructor(firstName, lastName, phoneNumber, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;

    }

    introduce(){
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}

let student1= new student('Tom', 'Sawyer', '656505220', 'A');
let student2 = new student('Matt','Heine','4063041624', 'A');

student1.introduce();
student2.introduce();

/* wow!! this oop just made so much click in my head!  I feel like this will make things a lot easier while programming*/

//INHERITANCE  INHERITANCE  INHERITANCE

class PromotionSender{
    constructor(){

    }
    sendNotification(notification){
        console.log('Sending: ' + notification);
    }

    findUserWithStatus(status){
        let users = getUser(status);
        return users;
    }

    calculateDiscount(status){
        if (status === 'Gold'){
            return .3;}
            else if (status ==='Silver'){
                return .15;
            }
            return 0;
        }
    }

class CollectionSender{
    constructor(){

    }
    sendNotification(notification){
        console.log('Sending: ' +notification);
    }

    findUSerWithStatus(status){
        let users = getUser(status);
        return users;
    }
    calculateFee(status){
        if(status === 'Overdue'){
            return 10;
        } else if( status === 'Delinquent'){
            return 25;
        }
        return 5;
    }
}
/* If we look at the above two classes we can see a lot of similar code here.
the find users with status are identical in both for example.  
when we have classes with a lot of similar code that over laps we can extract this code into a parent class and inherit it into a child class.  this makes things and maintainability easiier to work with */
//imagine the following code is re-doing the above
//the next step is to create the notification sender class  - the Parent


class NotificationSender{
    constructor(status){
        this.status = status;
    }
    //we can copy the overlapping methods and post them to the parent (sendNotification and findUserWithStatus)  You then want to remove this overlapping code from the child classes
    sendNotification(notification){
        console.log('Sending: ' + notification);
    }

    findUserWithStatus(status){
        let users = getUser(status);
        return users;
    }
}
// Now our classes promotionSender and CollectionSender look cleaner
class PromotionSender extends NotificationSender{ 
    constructor(status){
        super(status);
    }
calculateDiscount(status){
    if (status === 'Gold'){
        return .3;}
        else if (status ==='Silver'){
            return .15;
        }
        return 0;
    }
}

class CollectionSender{
    constructor(status){
    super.NotificationSender(status);
    }
    calculateFee(status){
        if(status === 'Overdue'){
            return 10;
        } else if( status === 'Delinquent'){
            return 25;
        }
        return 5;
    }
}
// the extends word is used to inherit from another class
//super refers to the parent class --  its like the this keyword 
//you must always call the parents constructor in the class that extends another class

let CollectionSender= new CollectionSender("Overdue");
CollectionSender.sendNotification('this is a test collection notification.')

//thi should work as seen in the video but it doesnt when I run it...

// Handeling Exceptions Handeling Exceptions Handeling Exceptions
/* 
An exception can be thought of as an error. 
we can cath these errors in order to handle them gracefully.
To do this we can wrap code inside a triblock then following the try block we have a catch block for any exceptions or errors that occur */

List.push'hello');
console.log('goodbye');

//here we get an error because we are trying to push to an array that does not exist.  because of this we never run the following line.  the program crashed
// we can add try and catch blocks to fix this.

try{
    list.push('hello');

} catch (err){
    console.log(err);
}
console.log('goodbye');

//here we log the error because we handeled it and the program kept running so we get goodby to log as well
// best to only use these try-catch blocks when calling foreign api

// Menu App   Menu App   Menu App
/* creating a menu driven app thaat allows us to manage plaers and teams.
to start we need a class for teams and players
copy and paste code into walkthrough.js for the notes file to match up the notes with the code lines
*/
class Player{
    constructor(name, position) {
        this.name= name;
        this.position = position;
    }
    
    describe(){
        return `${this.name} plays ${this.position}`;
    }
}
class Team{
    constructor(name){
        this.name = name;
        this.players =[];
    }

    addPlayer(player){
        if (player instanceof Player){
            this.players.push(player);
        } else{
            throw new Error(`You can only add an instance of player.  Argument is not a player: ${player}`);
        
        }
    }
    describe(){
        return `${this.name} has ${this.players.length} players.`;
    }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }
    start(){
        let selection = this.showMainMenuOptions();
        while(selection != 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case'2' :
                    this.viewTeam();
                    break;
                case '3' :
                        this.deleteTeam();
                        break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
                }
                selection = this.showMainMenuOptions();
            }

            alert('Goodbye!');
        }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new team
            2) view team
            3) delete team
            4) display all teams
        `);
    }

    showTeamMenuOptions(teamInfo){
        return prompt(`
        0) back
        1) create player
        2) delete player
        ---------
        ${teamInfo}
        `);
    }

    displayTeams() {
        let teamString = '';
        for (let i = 0; i <this.teams.length; i++){
            teamString += i + ') ' + this.teams[i].name + '\n';
        }
        alert(teamString);
    }

    createTeam() {
        let name = prompt('enter name for new team');
        this.teams.push(new Team(name));
    }

    viewTeam() {
        let index = prompt('enter the index of the team you wish to view');
        if(index >-1 && index <this.teams.length){
            this.selectedTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';
            
            for (let i =0; i< this.selectedTeam.players.length; i++){
                description += i + ') ' + this.selectedTeam.players[i].name + '- ' + this.selectedTeam.players[i].position + '\n';
            } 
            let selection = this.showTeamMenuOptions(description);
            switch (selection){
                case '1':
                    this.createPlayer();
                    break;
                case '2' :
                    this.deletePlayer();
            }
        }
    }

    deleteTeam(){
        let index = prompt('Enter the index of the team you wish to delete');
        if(index > -1 && index < this.teams.length){
            this.teams.splice(index, 1);
        }
    }

    createPlayer(){
        let name = prompt('Enter name for new pplayer:');
        let position= prompt('enter position for new player');
        this.selectedTeam.players.push(new Player(name, position));
    }

    deletePlayer(){
        let index = prompt('Enter the index of the player you wish to delete');
        if (index > -1 && index < this.selectedTeam.players.length){
            this.selectedTeam.players.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();