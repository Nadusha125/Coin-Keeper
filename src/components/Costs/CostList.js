import './CostList.css'
import CostItem from "./CostItem"


const CostList = (props) => {

    if(props.costs.length === 0) {
        return <h2 className='cost-list__fallback'>В этом году расходов нет</h2>
    }


const kyeLS = Object.keys(localStorage)
// console.log('kyeLS', kyeLS)
// console.log('props.costs', props.costs)

const costLS = kyeLS.map((id)=> {
    const product = JSON.parse(localStorage.getItem(id))
    // console.log('product', product)
    return {id, ...product}
})

console.log('costLS', costLS)

const costUI = costLS.map((cost) => (      
            <CostItem
                key={cost.id}
                date={cost.date}
                description={cost.description}
                amount={cost.amount}
            />
))
 console.log('costUI', costUI)

   return <>
   <ul className='cost-list'>
   <div>{costUI}</div>
        {props.costs.map((cost) => (
         <CostItem 
         key={cost.id}
         date={cost.date} 
         description={cost.description}
         amount={cost.amount}
         />
      ))}
   </ul>
   </>
}

export default CostList