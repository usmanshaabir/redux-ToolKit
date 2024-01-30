import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '../feature/Users/userSlice';

function Users() {
  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();

  const handleSetUser = () => {
    dispatch(setUsers({ name: userInput }));

  };

  return (
    <>
      <h2>User Profile</h2>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleSetUser}>Set User</button>
      <p>{userInput}</p>
    </>
  );
}

export default Users;
