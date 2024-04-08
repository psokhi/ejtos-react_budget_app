import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const CurrencyDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectCurrency, setSelectCurrency] = useState('£ Pound');
  const {dispatch} = useContext(AppContext);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option,symb) => {
    setSelectCurrency(option);
    setIsOpen(false);
    dispatch({
        type:'CHG_CURRENCY', 
        payload:symb
    });
  };

  return (
        <div class="dropdown">
            <button 
                class="btn btn-secondary dropdown-toggle" 
                type="button" 
                color='green'
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
                                        onClick={()=>handleOptionClick(currency.option, currency.symbol)}>
                                            {currency.option}</button>
                        )}
                </div>
            }
        </div>
  );
};

let currencyList = [
    {index:1, option: "$ Dollar", symbol: "$"},
    {index:2, option:"£ Pound", symbol: "£"}, 
    {index:3, option:"€ Euro", symbol: "€"}, 
    {index:4, option:"₹ Ruppee", symbol: "₹"}
]

export default CurrencyDropdown;