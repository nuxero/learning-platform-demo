import React from 'react';
import { useParams } from 'react-router-dom';
import { HomeworkFileList } from '../components/Homeworks';

const ListHomeworkFilesPage = () => {
  const { uuid } = useParams<{uuid: string}>();

  return <HomeworkFileList uuid={uuid} />
}

export default ListHomeworkFilesPage;