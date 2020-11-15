import { useMutation } from '@apollo/client';
import React from 'react';
import { useLocation } from 'react-router';
import { INVITE_STUDENT } from '../../data/mutations';
import { Student, StudentListAction } from '../../models';
import { StudentsList } from '../Students';

const Attendees = () => {
  const [inviteStudent] = useMutation(INVITE_STUDENT)
  const location = useLocation();

  const actions = new Array<StudentListAction>(
    {
      actionName: 'Invite',
      onAction: (student: Student) => {
        inviteStudent({
          variables: {
            phoneNumber: student.phoneNumber,
            url: window.location.origin + location.pathname
          }
        })
      }
    }
  )

  return (
    <>
      <StudentsList actions={actions}/>
    </>
  )
}

export default Attendees;