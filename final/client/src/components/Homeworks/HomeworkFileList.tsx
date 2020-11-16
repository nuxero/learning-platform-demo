import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_HOMEWORK_FILES } from '../../data/queries';
import { HomeworkFile } from '../../models';

const HomeworkFileList = ({ uuid }: { uuid: string }) => {
  const { data, loading, error } = useQuery<
    { homeworkFiles: HomeworkFile[] },
    { uuid: string }
  >(GET_HOMEWORK_FILES, {
    variables: {
      uuid,
    },
  });

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {data && (
        <>
          <h1>Homework Files</h1>
          <p>{data.homeworkFiles.length > 0 && data.homeworkFiles[0].homework.description}</p>
          <table>
            <thead>
              <tr>
                <th>Phone Number</th>
                <th>Student Name</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {data.homeworkFiles.map((homeworkFile) => {
                return (
                  <tr key={homeworkFile.student.phoneNumber}>
                    <td>{homeworkFile.student.phoneNumber}</td>
                    <td>
                      {homeworkFile.student.firstName}
                      {homeworkFile.student.lastName}
                    </td>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={homeworkFile.url}
                      >
                        {homeworkFile.url}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default HomeworkFileList;
