
//without arrow function
const team = {
  members: ['Bob', 'Jane'],
  teamName: 'Super Squad',
  teamSummary : function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`
    }.bind(this)); //if without .bind(this) ==> this.teamName = undefined
  }
};
console.log(team.teamSummary());//["Bob is on team Super Squad", "Jane is on team Super Squad"]

//================================================================================
//using jquery approach
const team = {
  members: ['Bob', 'Jane'],
  teamName: 'Super Squad',
  teamSummary : function() {
  var this.self;
    return this.members.map(function(member) {
      return `${member} is on team ${self.teamName}`
    });
  }
};
console.log(team.teamSummary());//["Bob is on team Super Squad", "Jane is on team Super Squad"]

//================================================================================
//with arrow function
const team = {
  members: ['Bob', 'Jane'],
  teamName: 'Super Squad',
  teamSummary : function() {
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`
    });
  }
};
console.log(team.teamSummary());//["Bob is on team Super Squad", "Jane is on team Super Squad"]

//================================================================================

const profile = {
    name: 'Alex',
    getName: function() {
      return this.name
    }
};
//arrow function
const profile2 = {
    name: 'Alex',
    getName() {
     return this.name 
   }
};

console.log(profile.getName()); //alex
console.log(profile2.getName());//undefined