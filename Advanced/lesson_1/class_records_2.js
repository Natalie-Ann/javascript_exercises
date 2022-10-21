// To determine a student's grade, we first determine the student's average score from the four exams, then sum all the exercise scores. We then apply the weights to compute the student's final percent grade. Finally, we determine the letter equivalent grade from the student's percent grade we just computed.

// For example, let's assume a term with three exercises with maximum scores of [20, 30, 50]. A student got [90, 80, 95, 71] on her four exams, and [20, 15, 40] on her exercises. To determine her final grade, we follow these steps:

// Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
// Compute the student's total exercise score: 20 + 15 + 40 = 75
// Apply weights to determine the final percent grade: 84 * .65 + 75 * .35 = 80.85
// Round the percent grade to the nearest integer: 81
// Lookup the letter grade in the table above: C
// Combine the percent grade and letter grade: "81 (C)"

// Given this information, implement a function that takes a studentScores object and returns a class record summary object.
// Round the exam averages to one digit after the decimal point.

/*
Input: object with nested objects
Output: object

Explicits:  - output object has class records summary containing student letter grades and class averages for every exam
            - exercises are weighted 35% and exams are weighted 65%
            - exercises are totaled and get average for exams
            - output combines the percent grade with teh letter grade
            - round exam averages in summary object to one digit after decimal point
Implicits:  - 

DS: arrays and objects

Algorithm: 
- Create reference for the letter grades (function with switch returns letter grade)
- Create an object with two properties {studentGrades: [], exams: []}
- Iterate through the input object (studentScores)
    - for each student
        - compute weighted average exam score (sum exam scores and divide by 4) * .65, round to 1 decimal
        - compute weighted exercise score (sum exercises) * .35
        - add the two scores above to get finalPercentGrade
        - get the letter grade from the reference
        - concat finalPercentGrade and letterGrade
        - push the string value of finalpercentgrade and letter grade to the summaryObject
- Extract the exam scores
    - Creat an exams variable array []
    - Iterate through the studentSCores object (for..in loop)
        - current exam = []
        - forEach student, add the current indexed exam to the currentExam array
        - Reduce the currentExams array, creating an object
            - Calculate average; add all scores and divide by # of students, round to 1 decimal
            - Find max number, add this to the summaryObject
            - Find min, add this to the summaryObject
*/

function getLetterGrade(finalPercentGrade) {
    switch(true) {
        case (finalPercentGrade >= 93):
            return 'A';
            break;
        case (finalPercentGrade >= 85):
            return 'B';
            break;
        case (finalPercentGrade >= 77):
            return 'C';
            break;
        case (finalPercentGrade >= 69):
            return 'D';
            break;
        case (finalPercentGrade >= 60):
            return 'E';
            break;
        default:
            return 'F';
    }
}

function getScoresByExam(examScores) {
    let exams = [];
    while (examScores[0].length > 0) {
        exams.push(examScores.reduce((accum, currentStudent) => {
        let examScore = currentStudent.shift();
        accum.push(examScore);
        return accum;
    }, []));
    }
    return exams;
}

function generateClassRecordSummary(studentScores) {
    let classRecordsSummary = {studentGrades: [], exams: []}
    let examScores = [];

    Object.entries(studentScores).forEach((student, index) => {
        let weightedAverageExamScore = (student[1].scores.exams.reduce((accum, current) => accum + current, 0)/4) * .65;
        let weightedExerciseScore = (student[1].scores.exercises.reduce((accum, current) => accum + current, 0)) * .35;
        let finalPercentGrade = Math.round(weightedAverageExamScore + weightedExerciseScore);
        let letterGrade = getLetterGrade(finalPercentGrade);
        classRecordsSummary.studentGrades.push(`${finalPercentGrade} (${letterGrade})`);
        examScores.push(student[1].scores.exams);
    });

    let scoresByExam = getScoresByExam(examScores);
    classRecordsSummary.exams = scoresByExam.reduce((accum, currentExam) => {
        let average = Math.round((currentExam.reduce((accum, current) => accum + current, 0)/5) * 10)/10;
        let max = Math.max(...currentExam);
        let min = Math.min(...currentExam);
        let examStats = {'average': average, 'minimum': min, 'maximum': max};
        accum.push(examStats);
        return accum;
    }, []);

    return classRecordsSummary;
  }
  


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
  

  console.log(generateClassRecordSummary(studentScores));


  
  // returns:
//   {
//     studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//     exams: [
//       { average: 75.6, minimum: 50, maximum: 100 },
//       { average: 86.4, minimum: 70, maximum: 100 },
//       { average: 87.6, minimum: 60, maximum: 100 },
//       { average: 91.8, minimum: 80, maximum: 100 },
//     ],
//   }
