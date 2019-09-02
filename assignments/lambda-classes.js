// CODE here for your Lambda Classes

class Person{
    constructor(args){
        this.name = args.name;
        this.age = args.age;
        this.location = args.location;
    }

    speak(){
        `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Student extends Person{
    constructor(args){
        super(args);
        this.previousBackground = args.previousBackground;
        this.className = args.className;
        this.favSubjects = args.favSubjects;
        this.grade = args.grade;
    }

    listSubjects(){
        this.favSubjects.forEach(subject => {
            console.log(subject);
        });
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun a sprint challenge on ${subject}`);
    }

    graduate(){
        this.grade > 70 ? `${this.name} has graduated!` : `${this.name} will continue submitting assignments.`
    }
}

class Instructor extends Person{
    constructor(args){
        super(args);
        this.specialty = args.specialty;
        this.favLanguage = args.favLanguage;
        this.catchPhrase = args.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject){
        console.log(`${student.name} recieves a perfect score on ${subject}`);
    }

    gradeAssignment(student){
        // Determine whether to add or subtract from grade based on randomly generating an number and determining whether it is even or odd.
        // Even will add, odd will subtract.
        let goodAssignment = Math.floor(Math.random()*10) % 2 === 0;
        console.log(`${student.name}'s pre-assignment grade is currently: ${student.grade}`)
        goodAssignment ? student.grade += Math.floor(Math.random()*25) : student.grade -= Math.floor(Math.random()*25);
        console.log(`${student.name}'s grade is now: ${student.grade}`);
    }
}

class ProjectManager extends Instructor{
    constructor(args){
        super(args);
        this.gradClassName = args.gradClassName;
        this.favInstructor = args.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const josh = new Student({
    name: 'Joshua',
    age: 28,
    location: 'VT',
    previousBackground: ['JS', 'Node'],
    className: 'WebPT10',
    favSubjects: ['LESS', 'JS'],
    grade: 50
});

josh.listSubjects();

const keiran = new Instructor({
    name: 'Keiran',
    age: 27,
    location: 'IDK',
    specialty: 'React',
    favLanguage: 'Ruby',
    catchPhrase: `I'm not playing guitar for you guys`
});

keiran.grade(josh, 'JS');

const humberto = new ProjectManager({
    name: 'Humberto',
    age: 28,
    location: 'CA',
    specialty: 'JS',
    favLanguage: 'Python',
    catchPhrase: `Nice work guys`,
    gradClassName: 'CSPT2',
    favInstructor: 'Sean'
});

humberto.gradeAssignment(josh);

// A more complete grading system would incorporate a number of assignments attribute which the grade would be divided by.
