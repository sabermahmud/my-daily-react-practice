import React from "react";

function StudentsCard({ student }) {
  const { name, school, gpa, district } = student;
  return (
    <div className="border-2 p-6">
      <button className="px-4 shadow-lg shadow-blue-500 ">+</button>

      <div className="mt-4">
        <h3 className="text-center text-2xl font-bold bg-blue-500/50">{name}</h3>
        <p>Class: {student.class}</p>
        <p>GPA: {gpa}</p>
        <p>School: {school}</p>
        <p>District: {district}</p>
      </div>
    </div>
  );
}

export default StudentsCard;
