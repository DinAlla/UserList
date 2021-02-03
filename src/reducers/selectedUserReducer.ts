const selectedUserReducer = (state: UserItem | null = null, action: any) => {
  if (action.type === 'SET_SELECTED_USER') {
    return action.selectedUser;
  }
  return state;
};

export default selectedUserReducer;