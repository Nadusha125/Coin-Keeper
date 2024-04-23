import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from 'react';


const INITIAL_COSTS = [
  {
    id:'c1',
    date: new Date(2024, 2, 12),
    description: 'Холодильник',
    amount: 999.99
  },
  {
    id:'c2',
    date: new Date(2024, 11, 25),
    description: 'MacBook',
    amount: 1500.69
  },
  {
    id:'c3',
    date: new Date(2024, 4, 1),
    description: 'Джинсы',
    amount: 146.58
  },
]


function App() {
  
const [costs, setCosts] = useState(INITIAL_COSTS)

const addCoatHandler = (cost) => {
  setCosts(prevCosts => {
    return [cost, ...prevCosts]
  })



  // JSON.parse(localStorage.getItem(costs))
// let idLS = Object.keys(localStorage)
//   console.log('local', idLS)
}

  return (
   <div>
    <NewCost onAddCost={addCoatHandler}/>
    <Costs costs={costs}/>
   </div>
  );
}

export default App;
