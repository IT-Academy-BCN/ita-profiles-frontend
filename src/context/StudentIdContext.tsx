import { createContext, useMemo, useState } from 'react';
import { TchildrenProps } from '../interfaces/interfaces';

type TSelectedStudentContext = {
  studentUUID: string | null;
  setStudentUUID: (id: string | null) => void;
};

export const SelectedStudentIdContext = createContext<TSelectedStudentContext>({
  studentUUID: null,
  setStudentUUID: () => {},
});

export const SelectedStudentProvider = ({ children }: TchildrenProps) => {
  const [studentUUID, setStudentUUID] = useState<string | null>(null);

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
