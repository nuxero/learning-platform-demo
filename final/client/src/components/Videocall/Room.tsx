import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_START_CALL_SETTINGS } from '../../data/queries';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';

const Room = (props: any) => {
  const { uuid } = props;
  const { data, loading, error } = useQuery(GET_START_CALL_SETTINGS, {
    variables: { uuid },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  const { apiKey, session, token } = data.sessionDetails;

  return (
    <OTSession apiKey={apiKey} sessionId={session} token={token}>
      <OTPublisher />
      <OTStreams>
        <OTSubscriber />
      </OTStreams>
    </OTSession>
  );
};

export default Room;
