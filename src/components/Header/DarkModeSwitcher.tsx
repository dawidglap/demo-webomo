import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useColorMode from "@/hooks/useColorMode";

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    
    <motion.div
      onClick={() => {
        if (typeof setColorMode === "function") {
          setColorMode(colorMode === "light" ? "dark" : "light");
        }
      }}
      className="cursor-pointer"
    >
      <AnimatePresence initial={false} mode="wait">
        {colorMode === "light" ? (
          <motion.div
            key="light-icon"
            className="flex h-8 w-8 items-center justify-center" // Fixed-size wrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path for light mode icon */}
              <g clipPath="url(#clip0_1_11115)">
                <path
                  d="M11 16.4998C9.5413 16.4998 8.14235 15.9204 7.1109 14.8889C6.07945 13.8575 5.49999 12.4585 5.49999 10.9998C5.49999 9.54115 6.07945 8.1422 7.1109 7.11075C8.14235 6.0793 9.5413 5.49984 11 5.49984C12.4587 5.49984 13.8576 6.0793 14.8891 7.11075C15.9205 8.1422 16.5 9.54115 16.5 10.9998C16.5 12.4585 15.9205 13.8575 14.8891 14.8889C13.8576 15.9204 12.4587 16.4998 11 16.4998ZM11 14.6665C11.9725 14.6665 12.9051 14.2802 13.5927 13.5926C14.2803 12.9049 14.6667 11.9723 14.6667 10.9998C14.6667 10.0274 14.2803 9.09475 13.5927 8.40711C12.9051 7.71948 11.9725 7.33317 11 7.33317C10.0275 7.33317 9.0949 7.71948 8.40727 8.40711C7.71963 9.09475 7.33332 10.0274 7.33332 10.9998C7.33332 11.9723 7.71963 12.9049 8.40727 13.5926C9.0949 14.2802 10.0275 14.6665 11 14.6665ZM10.0833 0.916504H11.9167V3.6665H10.0833V0.916504ZM10.0833 18.3332H11.9167V21.0832H10.0833V18.3332ZM3.22207 4.51809L4.51824 3.22192L6.46249 5.16617L5.16632 6.46234L3.22207 4.519V4.51809ZM15.5375 16.8335L16.8337 15.5373L18.7779 17.4816L17.4817 18.7778L15.5375 16.8335ZM17.4817 3.221L18.7779 4.51809L16.8337 6.46234L15.5375 5.16617L17.4817 3.22192V3.221ZM5.16632 15.5373L6.46249 16.8335L4.51824 18.7778L3.22207 17.4816L5.16632 15.5373ZM21.0833 10.0832V11.9165H18.3333V10.0832H21.0833ZM3.66666 10.0832V11.9165H0.916656V10.0832H3.66666Z"
                  fill="#e2b42a"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_11115">
                  <rect width="22" height="22" fill="#e2b42a" />
                </clipPath>
              </defs>
            </svg>
          </motion.div>
        ) : (
          <motion.div
            key="dark-icon"
            className="flex h-8 w-8 items-center justify-center" // Fixed-size wrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path for dark mode icon */}
              <g clipPath="url(#clip0_841_9)">
                <path
                  d="M8.83697 5.88205C8.8368 7.05058 9.18468 8.19267 9.83625 9.16268C10.4878 10.1327 11.4135 10.8866 12.4953 11.3284C13.5772 11.7701 14.766 11.8796 15.9103 11.6429C17.0546 11.4062 18.1025 10.8341 18.9203 9.99941V10.0834C18.9203 14.7243 15.1584 18.4862 10.5175 18.4862C5.87667 18.4862 2.11475 14.7243 2.11475 10.0834C2.11475 5.44259 5.87667 1.68066 10.5175 1.68066H10.6016C10.042 2.22779 9.59754 2.88139 9.29448 3.60295C8.99143 4.32451 8.83587 5.09943 8.83697 5.88205Z"
                  fill="blue"
                />
              </g>
              <defs>
                <clipPath id="clip0_841_9">
                  <rect
                    width="20.1667"
                    height="20.1667"
                    fill="white"
                    transform="translate(0.434204)"
                  />
                </clipPath>
              </defs>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
    
    
  );
};

export default DarkModeSwitcher;
