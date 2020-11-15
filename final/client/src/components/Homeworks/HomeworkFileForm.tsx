import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {
  ADD_HOMEWORK_FILE,
  PRESIGN_HOMEWORK_FILE_UPLOAD,
} from '../../data/mutations';
import { GET_HOMEWORK } from '../../data/queries';
import { Homework } from '../../models';

const HomeworkFileForm = ({ uuid, token }: { uuid: string; token: string }) => {
  let homeworkFileRef: HTMLInputElement;

  const { data, loading, error } = useQuery<
    { homework: Homework },
    { uuid: string }
  >(GET_HOMEWORK, {
    variables: {
      uuid
    }
  });
  const [presignHomeworkFileUpload] = useMutation(PRESIGN_HOMEWORK_FILE_UPLOAD);
  const [addHomeworkFile] = useMutation(ADD_HOMEWORK_FILE);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {data && (
        <>
          <p>Description: {data.homework.description}</p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              try {
                const file =
                  homeworkFileRef &&
                  homeworkFileRef.files &&
                  homeworkFileRef.files[0];

                if (!file) {
                  throw new Error('file is not defined');
                }

                const { data } = await presignHomeworkFileUpload({
                  variables: {
                    fileName: `homeworks/uuid/${Date.now()}`,
                    isPublic: true,
                    token,
                  },
                });

                const imageData = JSON.parse(data.presignDocument);

                const formData = new FormData();

                formData.append('Content-Type', file?.type);
                formData.append('acl', 'public-read');

                Object.keys(imageData.fields).forEach((key) => {
                  formData.append(key, imageData.fields[key]);
                });

                formData.append('file', file);

                const result = await fetch(imageData.url, {
                  method: 'POST',
                  body: formData,
                });

                if (result.status >= 200 && result.status <= 299) {
                  addHomeworkFile({
                    variables: {
                      url: imageData.url + '/' + imageData.fields.Key,
                      uuid,
                      token,
                    },
                  });
                }
              } catch (err) {
                console.error('An error ocurred', err);
              }
            }}
          >
            <input
              id="homeworkFile"
              type="file"
              name="homeworkFile"
              ref={(node: HTMLInputElement) => (homeworkFileRef = node)}
            />
            <button type="submit">Send</button>
          </form>
        </>
      )}
    </>
  );
};

export default HomeworkFileForm;
