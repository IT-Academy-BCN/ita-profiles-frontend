import { createContext, useState } from 'react';
import { SmallScreenContextT, childrenProps } from '../interfaces/interfaces';

export const SmallScreenContext = createContext<SmallScreenContextT>(
  {} as SmallScreenContextT,
);

const SmallScreenProvider = ({ children }: childrenProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  return (
    <SmallScreenContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </SmallScreenContext.Provider>
  );
};

export default SmallScreenProvider;
