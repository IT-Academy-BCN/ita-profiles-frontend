import { ReactNode } from "react";

export interface loginForm {
  //this must be changed to 'dni' instead of 'email' but for json-server we need it to be 'email'
  email: string;
  password: string;
}

// This could be used globally if we're passing just the children props.
// Good for providers
export interface ChildrenProps{
  children: ReactNode;
}

// === SmallScreenContext ===
export type SmallScreenContextT = {
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

// === studentList ===
export interface StudentList {
  fullname: string;
  subtitle: string;
  photo:    string;
  tags:     Tag[];
  id:       number;
}

export interface Tag {
  id:   number;
  name: string;
}
