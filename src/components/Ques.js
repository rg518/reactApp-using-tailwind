import React, { useState } from 'react'

function Ques() {
    const [dropdowns, setDropdowns] = useState({
        dropdown1: false,
        dropdown2: false,
        // Add more dropdowns as needed
      });
    
      const toggleDropdown = (dropdownKey) => {
        setDropdowns((prevDropdowns) => ({
          ...prevDropdowns,
          [dropdownKey]: !prevDropdowns[dropdownKey],
        }));
      };
    
      return (
        <>
        <div className="max-w-md space-y-4  text-4xl text-blue-500 p-2"> FAQ </div>
        <div className="max-w-lg space-y-4 p-2">
          <Dropdown
            title="Can education flashcards be used for all age groups?"
            isOpen={dropdowns.dropdown1}
            onToggle={() => toggleDropdown('dropdown1')}
          >
            {/* Dropdown Content for Dropdown 1 */}
            <p>Your answer here!!</p>
          </Dropdown>
    
          <Dropdown
            title="How do education flashcards work?"
            isOpen={dropdowns.dropdown2}
            onToggle={() => toggleDropdown('dropdown2')}
          >
            {/* Dropdown Content for Dropdown 2 */}
            <p>Your answer here!!</p>
          </Dropdown>
    
          {/* Add more Dropdown components for additional dropdowns */}
        </div>
        </>
      );
}
const Dropdown = ({ title, isOpen, onToggle, children }) => {
    return (
      <div className="border rounded-md overflow-hidden">
        {/* Dropdown Header */}
        <div
          className="bg-gray-100 text-blue p-4 cursor-pointer flex justify-between items-center"
          onClick={onToggle}
        >
          <span className="font-semibold">{title}</span>
          <span>{isOpen ? '▲' : '▼'}</span>
        </div>
  
        {/* Dropdown Content */}
        {isOpen && <div className="p-4">{children}</div>}
      </div>
    );
  };

export default Ques