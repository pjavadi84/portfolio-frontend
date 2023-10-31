import React, { createContext, useContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authHeaders, setAuthHeaders] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser, authHeaders, setAuthHeaders }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to use the user context
export function useUser() {
  return useContext(UserContext);
}
