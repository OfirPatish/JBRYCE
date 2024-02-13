class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
    this.isAlive = true;
  }

  get getName() {
    return this.name;
  }

  get getSound() {
    return this.sound;
  }

  get getIsAlive() {
    return this.isAlive;
  }

  set setName(name) {
    this.name = name;
  }

  set setSound(sound) {
    this.sound = sound;
  }

  set setIsAlive(isAlive) {
    this.isAlive = isAlive;
  }

  eat(animal) {
    if (this instanceof Lion || this instanceof Cat) {
      animal.setIsAlive = false;
    }
  }

  drinkMilk(cow) {
    if (cow instanceof Cow) {
      return cow.isAlive === true;
    }
  }
}

class Lion extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
}

class Cow extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
}

class Mouse extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
}

let lion = new Lion("Simba", "Roar");
let cow = new Cow("Bessie", "Moo");
let cat = new Cat("Whiskers", "Meow");
let mouse = new Mouse("Squeaky", "Squeak");

console.log(`The lion named ${lion.getName} makes a sound: ${lion.getSound}`);
console.log(`The cow named ${cow.getName} makes a sound: ${cow.getSound}`);
console.log(`The cat named ${cat.getName} makes a sound: ${cat.getSound}`);
console.log(`The mouse named ${mouse.getName} makes a sound: ${mouse.getSound}`);

console.log(`===== Space =====`);

console.log(
  `Can ${cat.getName} drink milk from ${cow.getName}? ${
    cat.drinkMilk(cow) ? "Yes, the cat drinks milk." : "No, the cat cannot drink milk."
  }`
);
console.log(`===== Space =====`);

lion.eat(cow);

console.log(
  `Can ${cat.getName} drink milk from ${cow.getName} after ${lion.getName} ate it? ${
    cat.drinkMilk(cow) ? "Yes, the cat drinks milk." : "No, the cat cannot drink milk."
  }`
);
