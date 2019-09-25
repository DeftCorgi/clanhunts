import React, {useState, createContext, useEffect} from 'react';
import axios from 'axios';

export const HuntContext = createContext();

export const HuntProvider = ({children}) => {
  const [hunts, setHunts] = useState()

  const fetchHunts = async () => {
    const result = await axios.get('/api/hunts');
    setHunts(result.data)
  }

  useEffect(() => {
    fetchHunts();
  }, [])

  return (
    <HuntContext.Provider value={[hunts, setHunts]}>
      {children}
    </HuntContext.Provider>
  );
};
