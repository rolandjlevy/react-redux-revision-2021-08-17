import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersError } from '../store/actions';

const url = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {

  const dispatchAction = useDispatch();

  const fetchUsersFromApi = () => {
    return async function(dispatch) {
      dispatch(fetchUsersRequest());
      try {
        const { data } = await axios.get(url);
        dispatch(fetchUsersSuccess(data));
      } catch(err) {
        dispatch(fetchUsersError(err.message));
      }
    }
  }

  const dispatchIt = useDispatch();
  
  const {users, error, isLoading} = useSelector(state => state.getUsersReducer);

  return (
    <>
      <h2>Users</h2>
      <button onClick={() => dispatchAction(fetchUsersFromApi())}>Get users</button>
      <p>{isLoading ? 'Loading...' : ''}</p>
      {users.length > 0 ? (users.map(user => (
        <section key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <p>{user.website}</p>
          <hr />
        </section>
      ))) : (error)}
    </>
  )
}

export default Users;