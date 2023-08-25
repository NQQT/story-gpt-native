import React from 'react';
import { database } from '../database';
import { Text } from 'react-native';

export const StoryboardDisplay = React.memo(() => {
  const {
    record: { story },
  } = database();
  return (
    <>
      {story.map((paragraph, index) => (
        <Text key={index}>{paragraph}</Text>
      ))}
    </>
  );
});
