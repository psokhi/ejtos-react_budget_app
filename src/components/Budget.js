import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,expenses } = useContext(AppContext);
    //const { expenses }  = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [currExpense, setCurrExpense] = useState(expenses);
    
    const handleBudgetChange = (event) => {
        if (newBudget < expenses) {
            alert("Budget proposed "+ newBudget + " Spending " + currExpense);
            //setNewBudget(expenses);
            return;
        }
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £ </span> 
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
