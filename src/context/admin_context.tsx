"use client";
import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { CurrentFileTypes } from "@/types/CurrentIndex_Types";

// Define the structure of the AdminContext
export interface AdminContextType {
  currentPath: string; // Stores the current route path

  // Currently selected file
  currentFile: string;
  handleClick: (value: string, index: number) => void; // Function to update the selected file
  currentIndex: CurrentFileTypes;
  collapseAll: boolean; // Tracks if all sections should be collapsed
  setCollapseAll: React.Dispatch<SetStateAction<boolean>>; // Function to toggle collapse state
  isCrossOpen: boolean; // Controls visibility of the close (cross) button
  setIsCrossOpen: React.Dispatch<SetStateAction<boolean>>; // Function to toggle close button
  setCurrentIndex: React.Dispatch<SetStateAction<CurrentFileTypes>>;
}

// Create a context with a default value of null
export const AdminContext = createContext<AdminContextType | null>(null);

const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Get the current path from Next.js router
  const currentPath = usePathname();

  // State to track the currently selected file
  const [currentFile, setCurrentFile] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<CurrentFileTypes>({
    folderIndex: 0,
    subFolderIndex: 0,
  });
  // State to control the visibility of the close (cross) button
  const [isCrossOpen, setIsCrossOpen] = useState(false);

  // State to determine whether all sections should be collapsed
  const [collapseAll, setCollapseAll] = useState(false);

  /**
   * Handles the selection of a file within a subfolder.
   * Updates the current file and ensures sections are open as needed.
   */
  const handleClick = (subfolder: string, index: number) => {
    setCurrentIndex((prev) => ({
      ...prev,
      subFolderIndex: index,
    }));
    setCurrentFile(subfolder); // Set the selected file
    setIsCrossOpen(true); // Show the close button
  };

  // Context value to provide state and functions to child components
  const admin_context_value = {
    currentPath,
    currentFile,
    handleClick,
    isCrossOpen,
    setIsCrossOpen,
    setCollapseAll,
    collapseAll,
    currentIndex,
    setCurrentIndex,
  };

  return (
    <AdminContext.Provider value={admin_context_value}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
