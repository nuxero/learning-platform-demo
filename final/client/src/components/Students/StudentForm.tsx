import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_STUDENT } from '../../data/mutations';
import { GET_STUDENTS } from '../../data/queries';
import { Student, StudentData, StudentVars } from '../../models';

const StudentForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [addStudent] = useMutation<{ saveStudent: Student }, StudentVars>(
    ADD_STUDENT,
    {
      onCompleted() {
        setPhoneNumber('');
        setFirstName('');
        setLastName('');
      },
      update(cache, { data }) {
        const existingStudentsdata = cache.readQuery<StudentData>({
          query: GET_STUDENTS,
        });
        cache.writeQuery({
          query: GET_STUDENTS,
          data: {
            students: [
              ...(existingStudentsdata?.students as Student[]),
              data?.saveStudent,
            ],
          },
        });
      },
    }
  );

  return (
    <form
      className="form-inline"
      onSubmit={(e) => {
        e.preventDefault();
        phoneNumber &&
          firstName &&
          lastName &&
          addStudent({
            variables: {
              phoneNumber,
              firstName,
              lastName,
            },
          });
      }}
    >
      <label htmlFor="phone">
        Phone Number
      </label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <label htmlFor="firstName">
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label htmlFor="lastName">
        Last Name
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <button type="submit">
        Submit
      </button>
    </form>
  );
};

export default StudentForm;
