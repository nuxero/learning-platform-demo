import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ADD_STUDENT } from '../../data/mutation';
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
        <FormattedMessage id="student.form.phone_number" />
      </label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <label htmlFor="firstName">
        <FormattedMessage id="student.form.first_name" />
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label htmlFor="lastName">
        <FormattedMessage id="student.form.last_name" />
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <button type="submit">
        <FormattedMessage id="student.form.submit" />
      </button>
    </form>
  );
};

export default StudentForm;
