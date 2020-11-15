import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { PasswordlessLogin, HomeworkFileForm } from '../components/Homeworks';

const AddHomeworkFilePage = () => {
  const [ token, setToken ] = useState<string | null>(null);
  const { uuid } = useParams<{ uuid: string }>();

  return token ? <HomeworkFileForm token={token as string} uuid={uuid} /> : <PasswordlessLogin onLogin={(token) => setToken(token as string)} />
}

export default AddHomeworkFilePage;
