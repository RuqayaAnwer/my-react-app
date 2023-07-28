import React from 'react';

const StudentList = ['Rusul', 'Yasamin', 'Sara', 'Mais'];
const Students = () => {

  const Studentnam = (name) => {
    if (name === 'Sara' || name === 'Mais') {
      return false;
    }
    return StudentList.includes(name);
  };
  return (
    <div>
      {StudentList.map((name) =>(
      <div key={name}>
        <li>{name}</li>
        <button onClick={() => alert(`${name} is here?:${Studentnam(name) ? 'yes' : 'not here'}`)}> Cheack name </button>
      </div>
  
  ))}
    </div>
  );
  
};
export default Students;