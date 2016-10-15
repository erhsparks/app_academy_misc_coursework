function Student(fName, lName) {
  this.fName = fName;
  this.lName = lName;
  this.courses = [];
}

Student.prototype.name = function () {
  return `${this.fName} ${this.lName}`
};

Student.prototype.enroll = function (course) {
  if (this.hasConflict(course)) throw "course conflict!";

  this.courses.push(course);
  course.students.push(this);
};

Student.prototype.courseLoad = function () {
  let load = {};

  this.courses.forEach ((course) => {
    if (load[course.department]) {
      load[course.department] += course.credits;
    } else {
      load[course.department] = course.credits;
    }
  })

  return load;
};

Student.prototype.hasConflict = function (newCourse) {
  result = false;

  this.courses.forEach ((course) => {
    if (course.conflictsWith(newCourse)) result = true;
  })

  return result;
}








module.exports = Student;
