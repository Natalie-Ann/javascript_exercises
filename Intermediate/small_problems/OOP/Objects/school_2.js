function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      console.log(`${this.name} is a ${this.year} student`);
    },

    listCourses: function() {
      return this.courses;
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    addNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }

    },

    viewNotes: function() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name} : ${course.note}`);
        }
      });
    },

    updateNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        course.note = note;
      }
    },
  };
}



let school = {
  students: [],
  addStudent: function(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].indexOf(year) >= 0) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent: function(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode})
  },

  addGrade: function(student, courseName, grade) {
    let course = student.listCourses().filter(course => {
      return course.name === courseName;
    })[0];

    if (course) {
      course.grade = grade;
    }
  },

  getReportCard: function(student) {
    student.listCourses().forEach(course => {
      if (course.grade) {
        console.log(`${course.name} : ${String(course.grade)}`);
      } else {
        console.log(`${course.name} : In progress`);
      }
    });
  },

  courseReport: function(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(course => {
        return course.name === courseName;
      })[0];
    }

    let courseStudents = this.students.map(student => {
      let course = getCourse(student, courseName) || { grade: undefined };
      return { name: student.name, grade: course.grade };
    }).filter(student => student.grade);

    if (courseStudents.length > 0) {
      console.log(`= ${courseName} Grades=`);

      let average = courseStudents.reduce((total, student) => {
        console.log(`${student.name} : ${String(student.grade)}`);
        return total + student.grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log(`Course Average: ${String(average)}`);
    }
  },
};

let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, 'Math', 101);
console.log(school);