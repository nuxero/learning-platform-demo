import { useMutation } from '@apollo/client';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { START_VIDEOCALL_SESSION } from '../../data/mutations';
import { GET_START_CALL_SETTINGS } from '../../data/queries';

const startCallButton = {
  padding: '10pt',
  borderRadius: '3px',
  border: '0px',
};

const StartButton = () => {
  const [startSession] = useMutation(START_VIDEOCALL_SESSION, {
    update(client, { data: { startVideocallSession } }) {
      client.writeQuery({
        query: GET_START_CALL_SETTINGS,
        data: {
          sessionDetails: startVideocallSession
        },
        variables: {
          uuid: startVideocallSession.uuid
        }
      });
    },
    onCompleted({startVideocallSession}) {
      history.push(`/session/${startVideocallSession.uuid}`);
    } 
  });
  const history = useHistory();

  return (
    <div>
      <button
        style={startCallButton}
        onClick={() => {
          startSession();
        }}
      >
        Start Call
      </button>
    </div>
  );
};

export default StartButton;
