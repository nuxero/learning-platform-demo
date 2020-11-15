import React from 'react';
import { StudentsList, StudentForm } from '../components/Students';

const Students = () => {
  return (
    <>
      <h1>Students</h1>
      <StudentForm />
      <StudentsList />
    </>
  );
};

export default Students;
