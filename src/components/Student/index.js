import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import StudentGrades from "./Student_Grades/index.js";

const Student = props => {

  let {student, allStudents, index} = props
  const [gradesActive, setGradesActive] = useState(false);

  function averageGrades(arr) {
    let ans = 0;
    let length = arr.length;

    for (let i = 0; i < length; i++) {
      ans = ans + parseInt(arr[i]);
    }

    return (ans / length).toFixed(3);
  }

  const iconClick = () => {
    setGradesActive(!gradesActive);
  }

  return(
    <div className="student-container">
      <img src={student.pic} />
      <span className="student-information">
        <h4 className="student-name">
          {student.firstName} {student.lastName}
        </h4>
        <p className="student-detail">
          Email: {student.email}
        </p>
        <p className="student-detail">          
          Company: {student.company}
        </p>
        <p className="student-detail">          
          Skill: {student.skill}
        </p>
        <p className="student-detail">          
          Average: {averageGrades(student.grades)}%
        </p>
      </span>
      <StudentGrades grades={student.grades} gradesActive={gradesActive} student={student} allStudents={allStudents} index={index}/>
      <span className={gradesActive ? "hide-elm icon-clicker" : "show-elm icon-clicker"}>
        <FontAwesomeIcon icon={faPlus} onClick={iconClick} />
      </span>
      <span className={gradesActive ? "show-elm icon-clicker" : "hide-elm icon-clicker"}>
        <FontAwesomeIcon icon={faMinus} onClick={iconClick} />
      </span>      
    </div>
  );
}

export default Student;