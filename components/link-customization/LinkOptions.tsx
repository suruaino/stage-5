"use client"
import { useState } from 'react';
import styles from './LinkOptions.module.css';

interface Option {
  text: string;
  icon: string;
}

interface CustomSelectProps {
  options: Option[];
}

export default function CustomSelect({ options }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(options.length > 0 ? options[0] : null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.customSelect}>
      <button onClick={toggleDropdown} className={styles.selectButton}>
        {selectedOption && (
          <>
            <img src={selectedOption.icon} alt="" className={styles.icon} />
            {selectedOption.text}
          </>
        )}
        <span className={isOpen ? styles.iconOpen : styles.iconClosed}>▼</span>
      </button>
      {isOpen && options.length > 0 && (
        <ul className={styles.options}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className={styles.option}
            >
              <img src={option.icon} alt="" className={styles.icon} />
              {option.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
