// Lecture arrow functions 2

/*
// ES 5 
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {   
        //hack for work
        var self = this;
       console.log(this.color); document.querySelector('.green').addEventListener('click', function() {
           //this function has no access to properties of box, this element is whole window default
            var str = "This is box " + self.color;
            alert(str);
        });
    }
}

box5.clickMe();

// ES 6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {   
        
       console.log(this.color); document.querySelector('.green').addEventListener('click', () => {
            let str = `This is box ${this.color}`;
            alert(str);
        });
    }
}

box6.clickMe();

// ES 6
const box66 = {
    color: 'green',
    position: 1,
    //this keyword points to global window
    clickMe: () => {   
       console.log(this.color); document.querySelector('.green').addEventListener('click', () => {
            let str = `This is box ${this.color}`;
            alert(str);
        });
    }
}

box66.clickMe();
*/

function Person(name) {
    this.name = name;
}

//ES 5
Person.prototype.myFriends = 
    function(friends) {
    //anonymus function refers to the global obj
    var arr = friends.map(function(el) {
       return this.name + ' is friends ' + el;
        //bind fix it
    }.bind(this));
    
    console.log(arr);
} 

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends(friends);


// ES 6 
function Person6(name) {
    this.name = name;
}

Person6.prototype.myFriends6 = 
    function(friends) {
    let arr = friends.map( (el) => {
       return `${this.name} is friends el`;
    });
    console.log(arr);
} 

let friends6 = ['Bob', 'Jane', 'Mark'];

new Person6('Mike').myFriends6(friends6);

