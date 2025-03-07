"use client";
import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { usePathname } from "next/navigation";

export interface AdminContextType {
  currentPath: string;

  //currenFile Selected Type
  currentFile: string;
  setCurrentFile: React.Dispatch<SetStateAction<string>>;
  isMainOpen: boolean;
  setisMainOpen: React.Dispatch<SetStateAction<boolean>>;
  isCrossOpen: boolean;
  setIsCrossOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const AdminContext = createContext<AdminContextType | null>(null);

const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  //To get the current path
  const currentPath = usePathname();

  const [currentFile, setCurrentFile] = useState("personal-info");

  const [isMainOpen, setisMainOpen] = useState(false);

  const [isCrossOpen, setIsCrossOpen] = useState(false);

  const admin_context_value = {
    currentPath,
    currentFile,
    setCurrentFile,
    isMainOpen,
    setisMainOpen,
    isCrossOpen,
    setIsCrossOpen,
  };

  return (
    <AdminContext.Provider value={admin_context_value}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
