export const setUsersList = (userList: UserItem[]) => ({
  type: 'SET_USER_LIST',
  userList
});

export const setSelectedUser = (selectedUser: UserItem | null) => ({
  type: 'SET_SELECTED_USER',
  selectedUser
});