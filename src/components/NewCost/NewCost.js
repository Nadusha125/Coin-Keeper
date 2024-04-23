import React, {useState} from 'react';
import CostForm from "./CostForm"
import "./NewCost.css"


const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false)

    const saveCostDataHandler = (inputCostData) => {
        const coatData = {
                ...inputCostData,
                id: Math.random().toString()
        }
        props.onAddCost(coatData)
        setIsFormVisible(false)
        
        localStorage.setItem(coatData.id, JSON.stringify(coatData))

        // JSON.parse(localStorage.getItem(coatData.id))
        // if (localStorage.getItem(coatData.id)) {
        //      JSON.parse(localStorage.getItem(coatData.id))
        // }
    }


    const inputCostDataHandler = () => {
        setIsFormVisible(true)
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false)
    }

    return (
        <div className='new-cost'>
            {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}
            {isFormVisible && <CostForm onSaveCostDate={saveCostDataHandler}
            onCancel={cancelCostHandler}/>}
        </div>
     
    )
}

export default NewCost