
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

function generateClassRecordSummary(scores) {
    let scoresArray = Object.entries(scores);
    let finalGrades = scoresArray.map(student => {
        let examScore = getAverageExamScore(student[1].scores.exams);
        let exerciseScore = getExerciseScore(student[1].scores.exercises);
        return getFinalGrade(examScore, exerciseScore);
    });
    let allStudentExamScores = getAllExamScores(studentScores);
    let classAverages = allStudentExamScores.map(exam => {
    return exam.reduce((accum, current) => accum + current, 0)/exam.length
});
    let minScores = allStudentExamScores.map(exam => {
        return getMinScores(exam);
    });
    let maxScores = allStudentExamScores.map(exam => {
        return getMaxScores(exam);
    });
    console.log({studentGrades: finalGrades, 
        exams: [
            {average: classAverages[0], min: minScores[0], max: maxScores[0]},
            {average: classAverages[1], min: minScores[1], max: maxScores[1]},
            {average: classAverages[2], min: minScores[2], max: maxScores[2]},
            {average: classAverages[3], min: minScores[3], max: maxScores[3]},
        ]});
}

function getMinScores(scores) {
    return Math.min(...scores);
}

function getMaxScores(scores) {
    return Math.max(...scores);
}

generateClassRecordSummary(studentScores);

function getExerciseScore(scores) {
    let score = scores.reduce((accum, current) => accum + current, 0);
    return score;
}

function getAverageExamScore(scores) {
    let sum = scores.reduce((accum, current) => accum + current, 0);
    let average = Math.round(sum/4);
    return average;
}

function getAllExamScores(students) {
    let exam1Scores = [];
    let exam2Scores = [];
    let exam3Scores = [];
    let exam4Scores = [];
    Object.entries(students).forEach(student => {
        let score1 = student[1].scores.exams[0];
        let score2 = student[1].scores.exams[1];
        let score3 = student[1].scores.exams[2];
        let score4 = student[1].scores.exams[3];
        exam1Scores.push(score1);
        exam2Scores.push(score2);
        exam3Scores.push(score3);
        exam4Scores.push(score4);
        });
    return [exam1Scores, exam2Scores, exam3Scores, exam4Scores];
}



function getFinalGrade(averageExamScore, exerciseScore) {
    let finalGrade = Math.round((averageExamScore * .65) + (exerciseScore * .35));
    let letterGrade = ''
    if (finalGrade >= 93) {
        letterGrade = 'A';
    } else if (finalGrade >= 85) {
        letterGrade = 'B';
    } else if (finalGrade >= 77) {
        letterGrade = 'C';
    } else if (finalGrade >= 69) {
        letterGrade = 'D';
    } else if (finalGrade >= 60) {
        letterGrade = 'E';
    } else {
        letterGrade = 'F';
    }
    return `${finalGrade} (${letterGrade})`;
}







