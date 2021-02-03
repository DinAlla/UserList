
const initialState: UserItem[] = [];

const userListReducer = (state: UserItem[] = initialState, action: any) => {
  if (action.type === 'SET_USER_LIST') {
    return action.userList;
  }
  return state;
};

export default userListReducer;