import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_STUDENTS } from '../../data/queries';
import { Student, StudentListProps } from '../../models';

const StudentsList = ({ actions = [] }: StudentListProps) => {
  const { data, loading, error } = useQuery(GET_STUDENTS);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {data && (
        <table>
          <thead>
          <tr>
            <th>Phone Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            {actions.length > 0 && <th>Actions</th>}
          </tr>
          </thead>
          <tbody>
          {data.students.map((student: Student) => {
            return (
              <tr key={student.phoneNumber}>
                <td>{student.phoneNumber}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>
                  {actions.map((action) => (
                    <button key={action.actionName} onClick={() => action.onAction(student)}>
                      {action.actionName}
                    </button>
                  ))}
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default StudentsList;
