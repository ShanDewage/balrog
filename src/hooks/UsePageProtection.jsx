// usePageProtection.js
import { useEffect } from "react";

const UsePageProtection = () => {
  useEffect(() => {
    const handleRightClick = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.ctrlKey && ["u", "s", "c", "a"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleRightClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default UsePageProtection;
