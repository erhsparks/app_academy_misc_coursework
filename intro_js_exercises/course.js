const Student = require("./student");

function Course (name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
}

Course.prototype.students = function () {
  return this.students;
};

Course.prototype.addStudent = function (student) {
  if (this.students) {
    if (!this.students.includes(student)) {
      student.enroll(this);
    }
  } else {
    let this.students = [student];
    student.enroll(this);
  }
};


let c1 = new Course("JS 101", "a/A", 100);
let s1 = new Student("Fred", "the orange Cat");


console.log();
