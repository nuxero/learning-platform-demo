import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Homework } from '../../models';
import { ADD_HOMEWORK } from '../../data/mutations';
import { GET_HOMEWORKS } from '../../data/queries';

const HomeworkForm = () => {
  const [description, setDescription] = useState('');

  const [addHomework] = useMutation<
    { saveHomework: Homework },
    { description: string }
  >(ADD_HOMEWORK, {
    onCompleted() {
      setDescription('');
    },
    update(cache, { data }) {
      const existingHomeworksData = cache.readQuery<{ homeworks: Homework[] }>({
        query: GET_HOMEWORKS,
      });
      cache.writeQuery({
        query: GET_HOMEWORKS,
        data: {
          homeworks: [
            ...(existingHomeworksData?.homeworks as Homework[]),
            data?.saveHomework,
          ],
        },
      });
    },
  });

  return (
    <>
      <form
        className="form-inline"
        onSubmit={(e) => {
          e.preventDefault();
          description &&
            addHomework({
              variables: {
                description,
              },
            });
        }}
      >
        <label htmlFor="description">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default HomeworkForm;
