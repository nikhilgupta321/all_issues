// JournalsDropdown.js
import React, { useState } from 'react';
  
const JournalsDropdown = ({ options, label, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setIsOpen(false);
    onOptionSelect(option);
  };

  return (
    <div className="relative inline-block text-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-auto px-1 py-2 text-center bg-gray-300 rounded text-black-200 text-xs uppercase"
      >
        {label}
      </button>
      {isOpen && (
        <div className=" absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={index}
                className="block py-2 text-sm hover:bg-gray-200"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
  
export default JournalsDropdown;
