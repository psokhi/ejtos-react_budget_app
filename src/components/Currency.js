import React, { useState } from 'react';

const CurrencyDropdown = () => {
    const [selectCurrency, setSelectCurrency] = useState('£ Pound');
	const [showMenu, setShowMenu] = useState(false);
	
    const handleClick = () => {setShowMenu(!showMenu)}
	const handleChange = (event) => {
        setSelectCurrency(event.target.value);
		setShowMenu(false);
    }	
    return (
    <div className='alert alert-secondary'>
    <span onClick={handleClick}>Currency ({selectCurrency}) &#9660;</span>
	{showMenu && (
    <select className='alert alert-secondary' value={selectCurrency} onChange={handleChange}>
        <option value="$ Dollar">Dollar</option>
        <option value="£ Pound">Pound</option>
        <option value="€ Euro">Euro</option>
        <option value="₹ Ruppee">Ruppee</option>
        </select>) 
	}

</div>
    );
};
export default CurrencyDropdown;