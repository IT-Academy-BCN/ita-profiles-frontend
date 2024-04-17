import React, { createContext, useState, ReactNode } from 'react';

interface StudentFiltersContextType {
  selectedRoles: string[];
  selectedTags: string[];
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
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const addRole = (role: string) => {
    setSelectedRoles(prevRoles => [...prevRoles, role]);
  };

  const removeRole = (role: string) => {
    setSelectedRoles(prevRoles => prevRoles.filter(r => r !== role));
  };

  const addTag = (tag: string) => {
    setSelectedTags(prevTags => [...prevTags, tag]);
  };

  const removeTag = (tag: string) => {
    setSelectedTags(prevTags => prevTags.filter(t => t !== tag));
  };

  return (
    <StudentFiltersContext.Provider value={{ selectedRoles, selectedTags, addRole, removeRole, addTag, removeTag }}>
      {children}
    </StudentFiltersContext.Provider>
  );
};
