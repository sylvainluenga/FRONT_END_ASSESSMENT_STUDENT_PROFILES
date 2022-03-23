import React from "react";
import Tags from "./Tags/index.js";

const StudentGrades = props => {

  const {grades, gradesActive, student, allStudents, index} = props;

  return (
    <span className={gradesActive ? "show-elm student-grades" : 'hide-elm student-grades'}>
      {grades.map((grade, index) => (
          <p className="student-detail" key={index}>Test {index + 1}: {grade}%</p>
        ))}
      <Tags student={student} allStudents={allStudents} index={index}/>
    </span>
  );
}

export default StudentGrades;