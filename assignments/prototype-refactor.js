/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
    constructor(args){
        this.createdAt = args.createdAt;
        this.name = args.name;
        this.dimensions = args.dimensions;
    }

    destroy(){
        return `${this.name} was removed from the game.`
    }
}

class CharacterStats extends GameObject{
    constructor(charAttrs){
        super(charAttrs);
        this.healthPoints = charAttrs.healthPoints;
    }

    takeDamage(){
        return `${this.name} took damage.`
    }
}

class Humanoid extends CharacterStats {

    constructor(humanoidData){
        super(humanoidData);
        this.team = humanoidData.team;
        this.weapons = humanoidData.weapons;
        this.language = humanoidData.language;
    }

    greet(){
        return `${this.name} offers a greeting in ${this.language}`;
    }
}

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

class Hero extends Humanoid{
    constructor(heroArgs){
        super(heroArgs);
        this.damageDealtToEnemies = heroArgs.damageDealtToEnemies;
    }

    hit(giveOrTake, target, attackPoints){
        switch(giveOrTake === 'take'){

            case true: 
                        this.healthPoints -= attackPoints;
                        // I could have used the inherited takeDamage method, but wanted to console log damage and HP in this case.
                        this.healthPoints > 0 ? console.log(`${this.name} took ${attackPoints} damage: HP is now ${this.healthPoints}`) : console.log(this.destroy());
                        break;
        
            case false: 
                        //I could have either created another prototype method to handle taking damage 
                        //or directly altered it, or updated the existing takeDamage method to be more sophisticated
                        //However chose to do it this way to practice using .apply
                        this.hit.apply(target, ['take', target, attackPoints]);
                        this.damageDealtToEnemies += attackPoints;
                        break;
            }
        
        return;
    }
}

class Villain extends Hero{
    constructor(villainArgs){
        super(villainArgs);
        this.evilLaugh = villainArgs.evilLaugh;
    }

    laughInEvil(){
        console.log(`${this.name} cackles, ${this.evilLaugh}!!!`);
    }

}

const char1 = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Steve',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
    damageDealtToEnemies: 0
  });


  const char2 = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Edward',
    team: 'Murder Kingdom',
    weapons: [
      'Glock',
      'Ruger',
    ],
    language: 'Elvish',
    damageDealtToEnemies: 0,
    evilLaugh: 'Muahahaha'
  });

  char1.hit('give', char2, 5);

  char1.hit('give', char2, 4);

  char2.hit('give', char1, 10);

  char2.laughInEvil();