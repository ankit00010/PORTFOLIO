"use client";
import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { CurrentFileTypes } from "@/types/CurrentIndex_Types";
import { DetailsState } from "@/types/Details_Types";
import { ErrorState } from "@/types/ContactErrors_Types";
import { fetchService } from "@/services/fetch_services";

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

  //Contact Me related Operations
  details: DetailsState;
  error: ErrorState;
  handleDetailsChange: (
    field: keyof DetailsState,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setError: React.Dispatch<SetStateAction<ErrorState>>;
  sendEmail: () => void;
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
  const [details, setDetails] = useState<DetailsState>({
    _name: "",
    _email: "",
    _message: "",
  });

  const [error, setError] = useState<ErrorState>({
    _name_error: "",
    _email_error: "",
    _message_error: "",
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

  const handleDetailsChange = (
    field: keyof DetailsState,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setDetails((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear the error when user starts typing
    setError((prev) => ({
      ...prev,
      [`${field}_error`]: "",
    }));
  };

  //Api Call To Send Me the Email

  const sendEmail = async () => {
    const date = new Date();

    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const response = await fetchService({
      method: "POST",
      endpoint: "/api/portfolio/send-email",
      data: {
        name: details._name,
        email: details._email,
        message: details._message,
        date: formattedDate,
      },
    });

    const result = await response.data;
    if (result.code === 200) {
      setDetails({
        _name: "",
        _email: "",
        _message: "",
      });
      alert(result.message);
    } else {
      alert(result.message);
    }
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

    //Contacts Related Operations
    details,
    error,
    handleDetailsChange,
    setError,
    sendEmail,
  };

  return (
    <AdminContext.Provider value={admin_context_value}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
