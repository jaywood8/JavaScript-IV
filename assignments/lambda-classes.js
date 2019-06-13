// CODE here for your Lambda Classes

//visual schematic for class layout:
//1. People
    //1A. Instructors 
        //1Ai. Project Managers
    //1B. Students

class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location; 
    }
    speak() {
        console.log(`Hello my name is ${this.name}. I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(instAttrs) {
        super(instAttrs);
        this.specialty = instAttrs.specialty;
        this.favLanguage = instAttrs.favLanguage;
        this.catchPhrase = instAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(student + ' receives a perfect score on ' + subject);
    }
}
 
class Student extends Person {
    constructor(studAttrs){
        super(studAttrs)
        this.previousBackground = studAttrs.previousBackground;
        this.className = studAttrs.className;
        this.favSubjects = studAttrs.favSubjects;
    }
    listSubjects(){
        console.log(`${this.student.favSubjects}`)
    }
    PRassignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.student.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs)
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standup(slackChannel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsConsole(studentObj) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}
    
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: "Don't forget the homies"
    });    
