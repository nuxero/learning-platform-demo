import React from 'react';
import { useParams } from 'react-router-dom';
import { Room, Attendees } from '../components/Videocall';
import { VideoSessionParams } from '../models';

const VideoSession = () => {
  const { uuid } = useParams<VideoSessionParams>();
  
  return (
    <>
      <p>Joining to session {uuid}</p>
      <Room uuid={uuid} />
      <Attendees />
    </>
  );
};

export default VideoSession;
