const Student = require("./student");

function Course (name, department, credits, days, timeBlock) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
  this.days = days;
  this.timeBlock = timeBlock;
}

Course.prototype.addStudent = function (student) {
  if (!this.students.includes(student)) {
    student.enroll(this);
  }
};

Course.prototype.conflictsWith = function(course2) {
  let result = false;

  if (this.timeBlock === course2.timeBlock) {
    this.days.forEach ((day) => {
      if (course2.days.includes(day)) {
        result = true;
      }
    })
  }

  return result;
}

let c1 = new Course("JS 101", "a/A", 100, ['m','f'], 2);
let c2 = new Course("Ruby 101", "a/A", 2, ['m','t'], 2);
let c3 = new Course("Ruby 102", "a/A", 4, ['m','t'], 4);
let c4 = new Course("Ruby 103", "a/A", 4, ['w','s'], 2);
let s1 = new Student("Fred", "the orange Cat");

c1.addStudent(s1);
s1.enroll(c3);

console.log(s1.name());
console.log(c1.students);
console.log(s1.courses);
console.log(s1.courseLoad());

console.log();
console.log("Conflicts with:");
console.log(c1.conflictsWith(c2));
console.log(c1.conflictsWith(c3));
console.log(c1.conflictsWith(c4));

s1.enroll(c2);
