import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
function Transaction() {

    const navigate = useNavigate();
    const [km, setKm] = useState('');
    const [amount, setAmount] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [litres, setLitres] = useState('');
    const [date, setDate] = useState('');

    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };
    const handleTickClick = () => {
        if (km.trim() !== '' && amount.trim() !== '' && unitPrice.trim() !== '' && litres.trim() !== '' && date.trim() !== '') {
            const transactionData = {
                km,
                amount,
                unitPrice,
                litres,
                date
            };
            localStorage.setItem('transaction', JSON.stringify(transactionData));
            console.log('Data entered:', transactionData);
        }
    };

    function handleClick() {
        navigate("/Home")

    }

    return (
        <div class="next">
            <h1>fuel expense</h1>
            <div class="transaction-ip">
                <input type="number" placeholder="current km" value={km} onChange={(e) => handleInputChange(e, setKm)} />
                <input type="number" placeholder="amount" value={amount} onChange={(e) => handleInputChange(e, setAmount)} />
                <input type="number" placeholder="unit price" value={unitPrice} onChange={(e) => handleInputChange(e, setUnitPrice)} />
                <input type="number" placeholder="litres" value={litres} onChange={(e) => handleInputChange(e, setLitres)} />
                <input type="date" placeholder="date" value={date} onChange={(e) => handleInputChange(e, setDate)} />
            </div>
            <div className="tickbtn"><button class="tick" onClick={handleTickClick}><img src="savebutton.svg"></img></button></div>
        </div>
    )
}
export default Transaction




