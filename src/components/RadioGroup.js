import React from 'react';
import "../App.css";

export default function RadioGroup({ name, handleChange, values }) {//props name, handleChange, values

 

    return (
        <div>
            {
                values.map(item => <div className="radioGroup">
                    <input className="radio" type="radio" value={item.value} name={name} onClick={handleChange} id={item.value} />
                    <label className="radioLabel" htmlFor={item.value}>{item.value}</label>
                    
                </div>)
            }
        </div>
    )
}
