import {useEffect} from "react";
import {apiLoadUserById} from "../actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectedUser} from "../selectors";
import React from "react";
import { Link } from "react-router-dom";
import { setSelectedUser } from "../actions/actionsCreators";
import './selectedUser.scss';

const UserContainer = ({history, match: {params: {id}}}: any) => {
  const dispatch = useDispatch();
  const currentSelectedUser: any = useSelector(selectedUser);

  useEffect(() => {
    apiLoadUserById(id, dispatch);
    return () => {
      dispatch(setSelectedUser(null))
    };
  }, []);

  return (
      <div className="userContainer">
        {currentSelectedUser ? (
            <>
              <Link to="/users" className="back">Back</Link>
              <div className="user">
                <img src={currentSelectedUser?.avatar}
                     alt="avatar"
                     className="avatar"
                />
                <div className="text">id: {currentSelectedUser?.id}</div>
                <div className="text">email: {currentSelectedUser?.email}</div>
                <div className="text">first name: {currentSelectedUser?.first_name}</div>
                <div className="text">last name: {currentSelectedUser?.last_name}</div>
              </div>
              </>
        ) : (
            <div>Loading...</div>
        )}

      </div>
  );
};

export default UserContainer;