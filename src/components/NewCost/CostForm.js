import React, {useState} from 'react';
import "./CostForm.css"

const CostForm = (props) => {

    const [inpetName, setInpetName] = useState('')
    const [inpetAmount, setInpetAmount] = useState('')
    const [inpetDate, setInpetDate] = useState('')


    const nameChangeHandler = (event) =>  {
        setInpetName(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setInpetAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setInpetDate(event.target.value) 
    }

    const submitHandler =(event) => {
        event.preventDefault()
        

        const costDate = {
            description: inpetName,
            amount: inpetAmount,
            date: new Date(inpetDate)
        }


        props.onSaveCostDate(costDate);
        setInpetName('');
        setInpetAmount('');
        setInpetDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input type='text' value={inpetName} onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input type='number' min='0.01' step='0.01' value={inpetAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Дата</label>
                <input type='date' min='2019-01-01' step='2022-12-31' value={inpetDate} onChange={dateChangeHandler}/>
            </div>
            <div className="new-cost__actions">
                <button type='submit'>Добавить расход</button>
                <button tpe='button' onClick={props.onCancel}>Отмена</button>
            </div>
        </div>
    </form>    
}

export default CostForm