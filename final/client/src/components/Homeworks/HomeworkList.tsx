import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_HOMEWORKS } from '../../data/queries';
import { Homework } from '../../models';

const HomeworkList = () => {
  const { data, loading, error } = useQuery(GET_HOMEWORKS);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {data && (
        <table>
          <thead>
            <tr>
              <th>Identifier</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.homeworks.map((homework: Homework) => {
              return (
                <tr key={homework.id}>
                  <td>
                    <Link to={`/homeworks/${homework.uuid}/list`}>
                      {homework.uuid}
                    </Link>
                  </td>
                  <td>{homework.description}</td>
                  <td>
                    <Link to={`/homeworks/${homework.uuid}/upload`}>
                      Upload
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </>
  )
}

export default HomeworkList;