import React, { useState } from 'react';
import axios from 'axios';

export default function CreateUser() {
  const [user, setUser] = useState({ name: '', email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/users/create', user);
    alert('User Created');
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <input placeholder="Name" onChange={e => setUser({ ...user, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setUser({ ...user, email: e.target.value })} />
      <button type="submit">Create</button>
    </form>
  );
}
