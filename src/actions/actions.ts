import {Dispatch} from 'redux';
import { setUsersList } from './actionsCreators';

const apiRequest = async (url: string) => {
  return fetch(url, {
    headers: {'Content-Type': 'application/json'}
  })
      .then(async res => {
        if ([200, 201].includes(res.status)) {
          const a = await res.json();
          return Promise.resolve(a);
        }
      })
      .catch(() => Promise.resolve({}));
};

export const apiLoadUserList = async (page: number, dispatch: Dispatch) => {
  const res = await apiRequest(`https://reqres.in/api/users?page=${page}`);
  console.log(res, 'res');
  if (res.data) {
    dispatch(setUsersList(res.data));
  }
};