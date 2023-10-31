import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../providers/UserProvider';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, setAuthHeaders } = useUser();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/users/sign_in', {
        user: {
          email: email,
          password: password
        }
      });

      const userData = response.data.data;
      const headers = {
        'access-token': response.headers['access-token'],
        client: response.headers.client,
        expiry: response.headers.expiry,
        uid: response.headers.uid
      };

      // Store in context
      setUser(userData);
      setAuthHeaders(headers);

      // If you still want to store in localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('authHeaders', JSON.stringify(headers));
    } catch (error) {
      console.error('Error during login', error);
    }
  };

  return (
    <div>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
