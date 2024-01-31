import { ReactNode } from "react";

export interface loginForm {
  dni: string;
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

export interface IstepsProps {
  step: string;
}

export interface IisEdit {
  isEdit: boolean;
}
