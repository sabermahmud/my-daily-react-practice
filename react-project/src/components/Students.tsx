import React, { use } from "react";
import StudentsCard from "./children/StudentsCard";

function Students({ studentsDataPromise }) {
  const students = use(studentsDataPromise);

  return (
    <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
      {students.map(student => (
        <StudentsCard student={student} key={student.id}/>
      ))}
    </div>
  );
}

export default Students;
