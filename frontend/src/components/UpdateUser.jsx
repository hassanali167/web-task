import React, { useState } from 'react';
import axios from 'axios';

export default function UpdateUser() {
  const [id, setId] = useState('');
  const [user, setUser] = useState({ name: '', email: '' });

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/users/update/${id}`, user);
    alert('User Updated');
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Update User</h2>
      <input placeholder="User ID" onChange={e => setId(e.target.value)} />
      <input placeholder="New Name" onChange={e => setUser({ ...user, name: e.target.value })} />
      <input placeholder="New Email" onChange={e => setUser({ ...user, email: e.target.value })} />
      <button type="submit">Update</button>
    </form>
  );
}
