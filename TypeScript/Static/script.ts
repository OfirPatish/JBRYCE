class Student {
  private _name: string;
  private _major: string;
  private _age: number;
  private _grade: number;
  private static _totalStudents: number = 0;
  private static _sumOfGrades: number = 0;

  constructor(name: string, major: string, age: number, grade: number) {
    this._name = name;
    this._major = major;
    this._age = age;
    this._grade = grade;
    Student._totalStudents++;
    Student._sumOfGrades += grade;
  }

  public set name(value: string) {
    if (value.length === 0) {
      throw new Error("Invalid name. Name cannot be empty.");
    }
    this._name = value;
  }

  public get name(): string {
    return this._name;
  }

  public set major(value: string) {
    const validMajors = ["Programming", "Physics", "History", "Math"];
    if (validMajors.includes(value)) {
      this._major = value;
    } else {
      throw new Error("Invalid major. Major can only be Programming, Physics, History, or Math.");
    }
  }

  public get major(): string {
    return this._major;
  }

  public set age(value: number) {
    if (value >= 18 && value <= 120) {
      this._age = value;
    } else {
      throw new Error("Invalid age. Age can only be between 18 and 120.");
    }
  }

  public get age(): number {
    return this._age;
  }

  public set grade(value: number) {
    if (value >= 0 && value <= 100) {
      Student._sumOfGrades -= this._grade;
      this._grade = value;
      Student._sumOfGrades += this._grade;
    } else {
      throw new Error("Invalid grade. Grade can only be between 0 and 100.");
    }
  }

  public get grade(): number {
    return this._grade;
  }

  public static getAverageGrade(): number {
    return Student._sumOfGrades / Student._totalStudents;
  }

  public displayDetails(): string {
    return `Name: ${this._name}, Major: ${this._major}, Age: ${this._age}, Grade: ${this._grade}`;
  }
}

let student1 = new Student("John", "Programming", 20, 90);
student1.name = "Updated John";
student1.major = "Physics";
student1.age = 21;
student1.grade = 95;

let student2 = new Student("Jane", "Physics", 22, 80);
student2.name = "Updated Jane";
student2.major = "Programming";
student2.age = 23;
student2.grade = 85;

let student3 = new Student("Tom", "History", 19, 70);
student3.name = "Updated Tom";
student3.major = "Math";
student3.age = 20;
student3.grade = 75;

let student4 = new Student("Alice", "Math", 21, 60);
student4.name = "Updated Alice";
student4.major = "History";
student4.age = 22;
student4.grade = 65;

let student5 = new Student("Bob", "Programming", 23, 50);
student5.name = "Updated Bob";
student5.major = "Physics";
student5.age = 24;
student5.grade = 55;

console.log(student1.displayDetails());
console.log(student2.displayDetails());
console.log(student3.displayDetails());
console.log(student4.displayDetails());
console.log(student5.displayDetails());
console.log("\n");
console.log(`Average grade of all students: ${Student.getAverageGrade().toFixed(2)}`);
