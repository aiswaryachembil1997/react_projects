// components/UserList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="user-list">
      <h2 className='ms-4 ps-3 mb-4 mt-5 pt-4 text-center text-secondary'>User's Details</h2>
        <div className='d-flex justify-content-center'>
          <div className="users">
            {users.map(user => (
              <div key={user.id} className="user-card">
                <div className='d-flex'>
                  <h4 className='text-white id-style'>{user.id}</h4>
                  <h3 className='text-secondary mx-3'>{user.name}</h3>
                </div>
                <p><strong>User Name:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <p><strong>Company:</strong> {user.company.name}</p>
                <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}</p>
                <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
