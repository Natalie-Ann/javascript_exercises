let studentScores = {
    student1: {
      id: 123456789,
      scores: {
        exams: [90, 95, 100, 80],
        exercises: [20, 15, 10, 19, 15],
      },
    },
    student2: {
      id: 123456799,
      scores: {
        exams: [50, 70, 90, 100],
        exercises: [0, 15, 20, 15, 15],
      },
    },
    student3: {
      id: 123457789,
      scores: {
        exams: [88, 87, 88, 89],
        exercises: [10, 20, 10, 19, 18],
      },
    },
    student4: {
      id: 112233445,
      scores: {
        exams: [100, 100, 100, 100],
        exercises: [10, 15, 10, 10, 15],
      },
    },
    student5: {
      id: 112233446,
      scores: {
        exams: [50, 80, 60, 90],
        exercises: [10, 0, 10, 10, 0],
      },
    },
  };



let examScores = [
    [ 90, 95, 100, 80 ],
    [ 50, 70, 90, 100 ],
    [ 88, 87, 88, 89 ],
    [ 100, 100, 100, 100 ],
    [ 50, 80, 60, 90 ]
  ]

//how can I get create a new arrays according arranged by the index values [[90, 50, 88, 100, 50], [95, 70, 87, 100, 80]...]

// function getScoresByExam(examScores) {
//     let exams = [];
//     while (examScores[0].length > 0) {
//         exams.push(examScores.reduce((accum, currentStudent) => {
//         let examScore = currentStudent.shift();
//         accum.push(examScore);
//         return accum;
//     }, []));
//     }
//     return exams;
// }

// console.log(Object.keys(studentScores));
let scoreData = Object.keys(studentScores).map(student => studentScores[student].scores);
let examData = scoreData.map(score => score.exams);

function transpose(array) {
    return array[0].map((col, columnIdx) => {
      return array.map(row => row[columnIdx]);
    });
  }

console.log(transpose(examData));


// function getScoresByExam(examScores) {
//     let exams = [];
//     examScores.forEach((student, index) => {
//         exams.push(student[index])
//     });
//     return exams;
// }

//   console.log(getScoresByExam(examScores));