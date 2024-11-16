import { useContext, useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenCount } from './store/atoms/count';

// have a folder store for all the recoil atoms or state

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
    {count}
    </b>
    <EvenCountRenderer />
  </div>
}

//We now show is the count is even or not 
// ugly method

function EvenCountRenderer() {
  // const count = useRecoilValue(countAtom);
  // 1
//   return <div>
//     {count % 2 == 0 ? "It is even" : null}
//   </div>
  // 2
// const isEven = (count % 2 == 0);
  // 3
// const isEven = useMemo(() => {
//   return count % 2 == 0
// }, [count]) 
const isEven = useRecoilValue(evenCount);

return <div>
  {isEven ? "It is even" : null}
</div>
}


//Best method is selector from recoil
//selector is used to derive state from atoms

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("button render");
  
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>
    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
