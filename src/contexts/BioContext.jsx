/* eslint-disable react/prop-types */
// src/contexts/BioContext.js

import { createContext, useState } from "react";

// Create a new context instance
const BioContext = createContext();

// Create a provider component to wrap your app
export const BioProvider = ({ children }) => {
  const [bioDatas, setBioDatas] = useState([]);
  const [bio, setBio] = useState(null);

  return (
    <BioContext.Provider value={{ bioDatas, setBioDatas, bio, setBio }}>
      {children}
    </BioContext.Provider>
  );
};

export default BioContext;
