import React, { FunctionComponent } from 'react';
import { View, Button } from 'react-native';

import { useGetShareLinkWithUser } from '../hooks';

const ContactsList: FunctionComponent = () => {
  const user = { id: 1, profileImage: 'some', firstName: 'test' };
  const { shareLink, isLoading } = useGetShareLinkWithUser({
    user,
    campaign: 'GIFT',
    offer: 'Gift',
  });
  return (
    <View>
      <Button
        onPress={() => {console.log(shareLink)}}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default ContactsList;
