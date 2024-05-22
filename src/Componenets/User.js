import React from 'react';

const User = ({ user }) => {
  return (
    <li>
      <img src={user.picture.medium} 
      alt={user.name.first} 
      style={{
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        marginRight: '15px',
      }} />
       
      <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
      <p>Email: {user.email}</p>
    </li>
  );
};

export default User;
