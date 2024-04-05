import React, { useState } from 'react';

const CurrencyDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectCurrency, setSelectCurrency] = useState('£ Pound');
  const [warning,setWarning] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectCurrency(option);
    setIsOpen(false);
    // setWarning(true);
  };

  return (
    <>
      <button className="alert alert-secondary" onClick={toggleDropdown}>
        Currency ({selectCurrency}) &#9660;
      </button>
      {isOpen && (
        <div 
        className="alert alert-secondary"
        // onMouseEnter={()=>setWarning(true)} 
        // onMouseLeave={()=>setWarning(false)}
        >
          {currencyList.map((currency) => (
            <div 
            onMouseEnter={()=>setWarning(true)}
            onMouseLeave={()=>setWarning(false)}
            >
              <h6 
              key={currency.index}
              onClick={() => handleOptionClick(currency.option)}
              style={
                {backgroundColor: warning? 'white' : 'transparent'}}
              >{currency.option}</h6></div>
            
          ))}
        </div>
      )}
    </>
  );
};

let currencyList = [
    {index:1, option: "$ Dollar"},
    {index:2, option:"£ Pound"}, 
    {index:3, option:"€ Euro"}, 
    {index:4, option:"₹ Ruppee"}
]

export default CurrencyDropdown;