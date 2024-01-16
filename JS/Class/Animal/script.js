class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
    this.alive = true;
  }

  getName() {
    return this.name;
  }

  makeSound() {
    console.log(`${this.getName()} makes a ${this.sound} sound`);
  }

  isAlive() {
    return this.alive;
  }

  setAlive(alive) {
    this.alive = alive;
  }
}

class Lion extends Animal {
  constructor() {
    super("Lion", "Roar");
  }

  eat(animal) {
    if (animal instanceof Cow && animal.isAlive()) {
      animal.setAlive(false);
      console.log(`${this.getName()} eats ${animal.getName()}`);
    }
  }
}

class Cow extends Animal {
  constructor() {
    super("Cow", "Moo");
  }
}

class Cat extends Animal {
  constructor() {
    super("Cat", "Meow");
  }

  eat(animal) {
    if (animal instanceof Mouse && animal.isAlive()) {
      animal.setAlive(false);
      console.log(`${this.getName()} eats ${animal.getName()}`);
    }
  }

  drinkMilk(cow) {
    if (cow instanceof Cow && cow.isAlive()) {
      console.log(`${this.getName()} drinks milk from ${cow.getName()}`);
    }
  }
}

class Mouse extends Animal {
  constructor() {
    super("Mouse", "Squeak");
  }
}

let lion = new Lion();
let cow = new Cow();
let cat = new Cat();
let mouse = new Mouse();

lion.eat(cow);
cat.drinkMilk(cow);
cat.eat(mouse);

lion.makeSound();
cow.makeSound();
cat.makeSound();
mouse.makeSound();
