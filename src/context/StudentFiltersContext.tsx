import React, { createContext, useState, ReactNode } from 'react';

interface StudentFiltersContextType {
  roles: string[];
  tags: string[];
  addRole: (role: string) => void;
  removeRole: (role: string) => void;
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
}

export const StudentFiltersContext = createContext<StudentFiltersContextType | undefined>(undefined);

interface StudentFiltersProviderProps {
  children: ReactNode;
}

export const StudentFiltersProvider: React.FC<StudentFiltersProviderProps> = ({ children }) => {
  const [roles, setRoles] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const addRole = (role: string) => {
    setRoles(prevRoles => [...prevRoles, role]);
  };

  const removeRole = (role: string) => {
    setRoles(prevRoles => prevRoles.filter(r => r !== role));
  };

  const addTag = (tag: string) => {
    setTags(prevTags => [...prevTags, tag]);
  };

  const removeTag = (tag: string) => {
    setTags(prevTags => prevTags.filter(t => t !== tag));
  };

  const contextValue: StudentFiltersContextType = {
    roles,
    tags,
    addRole,
    removeRole,
    addTag,
    removeTag
  };

  return (
    <StudentFiltersContext.Provider value={contextValue}>
      {children}
    </StudentFiltersContext.Provider>
  );
};
