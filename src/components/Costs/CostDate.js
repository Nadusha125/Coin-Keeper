import './CostDate.css'


const CostDate = (props) => {

    const date = new Date(props.date)
    let month = date.toLocaleString("ru-RU", {month:'long'})
    let year = date.getFullYear() 
    let day = date.toLocaleString("ru-RU", {day:'2-digit'}) 

 

    return(
        <div className='cost-date'>
            <div className='cost-date__month'>{month}</div>
            <div className='cost-date__year'>{year}</div>
            <div className='cost-date__day'>{day}</div>
        </div>
    )
}
export default CostDate