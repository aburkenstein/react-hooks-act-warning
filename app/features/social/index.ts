import DismissableStackNavigator from 'components/dismissable-stack-navigator';

import ContactsListScreen from './containers/contacts-list';

export const InviteFriendsNavigator = DismissableStackNavigator(
  {
    ContactsList: ContactsListScreen,
  },
  {
    headerMode: 'none',
  },
);
