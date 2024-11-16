// Todo Creation application with filtering logic
// todos, filter

import { RecoilRoot } from "recoil"
import { FilterInput } from "./components/FilterInput"
import { InputTODO } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


// 2 input boxes(title, desc) => atom
// button 
// todos => atom 
// filter(gym) => atom 
// selector( the current set of todos)

function App() {
  return (
    <div>
      <RecoilRoot>
        <InputTODO />
        <br />
        <FilterInput />
        <br />
        <TodoList />
        <br />
      </RecoilRoot>
    </div>
  )
}

export default App
