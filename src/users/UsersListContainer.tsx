import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {userList} from '../selectors';
import {useEffect} from "react";
import { apiLoadUserList } from "../actions/actions";
import './users.scss';

const UsersListContainer = ({history}: any) => {
  const dispatch = useDispatch();
  const userCurrentList: any = useSelector(userList);

  useEffect(() => {
    apiLoadUserList(0, dispatch);
  }, []);

  const redirectToUser = (userId: string) => () => {
    history.push(`/user/${userId}`);
  };
  return (
      <div className="usersContainer">
        {userCurrentList.map((user: UserItem) => (
            <div key={user.id}
                 onClick={redirectToUser(user.id)}
                 className="user"
            >
              <img src={user.avatar}
                   alt="avatar"
              />
              {user.first_name}
              {user.last_name}
            </div>
        ))}
      </div>
  );
};

export default UsersListContainer;