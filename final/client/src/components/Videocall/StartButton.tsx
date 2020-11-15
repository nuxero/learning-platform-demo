import { useMutation } from '@apollo/client';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { START_VIDEOCALL_SESSION } from '../../data/mutation';
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
        <FormattedMessage id="call.dashboard.start_call" />
      </button>
    </div>
  );
};

export default StartButton;
