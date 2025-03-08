import { AdminContext, AdminContextType } from "@/context/admin_context";
import React, { useContext, useEffect, useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { IoMdFolder } from "react-icons/io";
import { folders } from "./constants";
import { usePathname } from "next/navigation";

const AboutMeSidebar = () => {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({
    bio: true,
  });

  const toggleFolder = (folderName: string) => {
    setOpenFolders((prev) => ({ ...prev, [folderName]: !prev[folderName] }));
  };
  const { handleClick, collapseAll, setCollapseAll, setCurrentIndex } =
    useContext(AdminContext) as AdminContextType;

  useEffect(() => {
    if (collapseAll) {
      setOpenFolders({});
      setCollapseAll(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapseAll]);

  const pathname = usePathname();

  if (pathname === "/projects" || pathname === "/contact-me") {
    return null;
  }
  return (
    <div className="sidebar-container">
      <ul className="folder-list">
        {folders.map((folder, index) => (
          <li key={folder.name}>
            <div
              className="folder-item"
              onClick={() => {
                toggleFolder(folder.name);
                setCurrentIndex((prev) => ({
                  ...prev,
                  folderIndex: index,
                }));
              }}
            >
              <span className="chevron">
                {openFolders[folder.name] ? (
                  <BiChevronDown />
                ) : (
                  <BiChevronRight />
                )}
              </span>
              <span className="folder-icon">
                <IoMdFolder color={folder.color} />
              </span>
              <span className="folder-text">{folder.name}</span>
            </div>
            {openFolders[folder.name] && (
              <ul className="subfolder-list">
                {folder.subFolders.map((subfolder, index) => (
                  <li
                    key={subfolder}
                    className="subfolder-item"
                    onClick={() => handleClick(subfolder, index)}
                  >
                    {folder.subFolder_icon}
                    <span>{subfolder}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutMeSidebar;
