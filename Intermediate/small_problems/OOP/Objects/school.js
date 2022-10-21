// Create a school object. The school object uses the student object from the previous exercise. 
// It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments 
// that might be needed by the school object. Implement the following methods for the school object:

// addStudent: Adds a student by creating a new student and adding the student to a collection of students. 
// The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. 
// Returns a student object if year is valid otherwise it logs "Invalid Year".
// enrollStudent: Enrolls a student in a course.
// addGrade: Adds the grade of a student for a course.
// getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
// courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
// To test your code, use the three student objects listed below. Using the three student objects, produces the following values 
//   from the getReportCard and courseReport methods respectively.


function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
  
    info() {
    console.log(`${this.name} is a ${this.year} year student.`);
    },
    
    listCourses() {
      console.log(this.courses);
    },
    
    addCourse(course) {
      this.courses.push(course);
    },
    
    addNote(code, note) {
      let newList = this.courses.map(course => {
        if (course.code === code) {
          if (course.note) {
            course.note = course.note + '; ' + note;
          } else {
          course.note = note;
          }
        }
      return course;
      });
      this.courses = newList;
    },
    
    viewNotes() {
      let coursesWithNotes = this.courses.filter(course => course.note);
      coursesWithNotes.forEach(course => {
        console.log(`${course.name}: ${course.note}`);
      });
    },
    
    updateNote(code, note) {
      let newList = this.courses.map(course => {
        if (course.code === code) {
          course.note = note;
        }
        return course;
      });
      this.courses = newList;
   },
  };
}

let school = {
    students: [],
    addStudent: function(name, year) {
      let student = createStudent(name, year);
      if (['1st', '2nd', '3rd', '4th','5th'].includes(year)) {
        this.students.push(student);
        return student;
      }
      return 'Invalid year';
    },
    enrollStudent: function(student, courseName, courseCode) {
      student.addCourse({name: courseName, code: courseCode});
    },
    // addGrade: function(student, courseName, grade) {
    //   let course = student.list.filter(course => {
    //     if (course.name === courseName) {
    //       return course;
    //     }
    //   })[0];
    //   course.grade = grade;
    // }
  };


// let foo = createStudent('foo', '3rd');
// let bar = createStudent('bar', '1st');
// let qux = createStudent('qux', '2nd');

school.addStudent('foo', '3rd');
school.enrollStudent('foo', 'Math', 101);
// school.enrollStudent('foo', 'Math', 101);
// school.enrollStudent('foo', 'Advanced Math', 102);
// school.enrollStudent('foo', 'Physics', 202);
// school.addGrade('foo', 'Math', 95);
console.log(school);


// foo
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

// bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

// qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//   ],
// }

// > school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

// > school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

// > school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

// > school.courseReport('Physics');
// = undefined