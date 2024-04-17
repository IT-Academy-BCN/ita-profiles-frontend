import React, { createContext, useState, ReactNode } from 'react';

type StudentIdContextType = {
  studentId: string,
  setStudentId: React.Dispatch<React.SetStateAction<string>>
}

export const StudentIdContext = createContext<StudentIdContextType | undefined>(undefined);

interface StudentIdProviderProps {
  children: ReactNode;
}

export const StudentIdProvider: React.FC<StudentIdProviderProps> = ({ children }) => {
  const [studentId, setStudentId] = useState('');

  return (
    <StudentIdContext.Provider value={{ studentId, setStudentId }}>
      {children}
    </StudentIdContext.Provider>
  );
};
