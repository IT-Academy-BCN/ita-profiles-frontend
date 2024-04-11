import { createContext, useMemo, useState } from 'react';
import { TchildrenProps } from '../interfaces/interfaces';

type TSelectedStudentContext = {
  // this can be null bc when the page loads, no student is selected.
  studentUUID: string | null;
  setStudentUUID: (id: string | null) => void;
};
// this context receives a state as argument:
// studentUUID which is the one that will store the uuid
// setStudentUUID which is the function that will get us the uuid
export const SelectedStudentIdContext = createContext<TSelectedStudentContext>({
  studentUUID: null,
  setStudentUUID: () => {},
});
// The provider ===>
export const SelectedStudentProvider = ({ children }: TchildrenProps) => {
  const [studentUUID, setStudentUUID] = useState<string | null>(null);

  // i have no idea if useMemo is working here. it should avoid rerendering this.
  const contextValue = useMemo(
    () => ({ studentUUID, setStudentUUID }),
    [studentUUID],
  );

  return (
    <SelectedStudentIdContext.Provider value={contextValue}>
      {children}
    </SelectedStudentIdContext.Provider>
  );
};
