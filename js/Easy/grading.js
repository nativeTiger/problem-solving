const gradingStudents = () => {
  const grades = [73, 67, 38, 33];
  grades.forEach((grade) => {
    if (grade >= 38) {
      if (grade + (5 - (grade % 5)) - grade < 3) {
        console.log(grade + (5 - (grade % 5)));
      } else {
        console.log(grade);
      }
    } else {
      console.log(grade);
    }
  });
};

export default gradingStudents;
