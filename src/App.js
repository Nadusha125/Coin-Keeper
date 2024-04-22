import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from 'react';


const INITIAL_COSTS = [
  {
    id:'c1',
    date: new Date(2022, 2, 12),
    description: 'Холодильник',
    amount: 999.99
  },
  {
    id:'c2',
    date: new Date(2022, 11, 25),
    description: 'MacBook',
    amount: 1500.69
  },
  {
    id:'c3',
    date: new Date(2022, 4, 1),
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
}

  return (
   <div>
    <NewCost onAddCost={addCoatHandler}/>
    <Costs costs={costs}/>
   </div>
  );
}

export default App;
