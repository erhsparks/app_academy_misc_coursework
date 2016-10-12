function Student(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}

Student.prototype.name = function () {
  return `${this.fName} ${this.lName}`
};

Student.prototype.courses = function () {
  return this.courses;
};

Student.prototype.enroll = function (course) {
  if (this.courses) {
    if (!this.courses.includes(course)) {
      this.courses.push(course);
      course.students.push(this);
    }
  } else {
    let this.courses = [course];
    course.students.push(this);
  }
};

// Student.prototype.courseLoad = function () {
//   this.courses.forEach ((course) => {
//     course.department
//   })
// };
