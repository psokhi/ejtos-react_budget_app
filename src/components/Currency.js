import React, { useState, createContext } from 'react';


const CurrencyDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectCurrency, setSelectCurrency] = useState('£ Pound');
  const CurrencyContext = createContext();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectCurrency(option);
    setIsOpen(false);
  };

  return (
    <CurrencyContext.Provider value={selectCurrency}>
            <div class="dropdown">
            <button 
                class="btn btn-secondary dropdown-toggle" 
                type="button" 
                id="dropdownMenu2" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
                onClick={toggleDropdown}>
                Currency({selectCurrency})
            </button>
            {isOpen &&
                <div class="alert alert-secondary">
                    {currencyList.map((currency)=>
                                        <button 
                                        class="dropdown-item" 
                                        type="button" 
                                        onClick={()=>handleOptionClick(currency.option)}>
                                            {currency.option}</button>
                        )}
                </div>
            }
            </div>
    </CurrencyContext.Provider>
  );
};

let currencyList = [
    {index:1, option: "$ Dollar"},
    {index:2, option:"£ Pound"}, 
    {index:3, option:"€ Euro"}, 
    {index:4, option:"₹ Ruppee"}
]

export default CurrencyDropdown;