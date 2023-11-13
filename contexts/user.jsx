'use client';

import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export default function AppStore({ children }) {
  const [user, setUser] = useState({
    name: 'Olá, Victor'
  });


  return (
    <UserContext.Provider value={{ user,  setUser}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
