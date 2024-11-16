import { useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messaingAtom, networkAtom, notificationAtom, totalNotiSelector } from './atoms'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const [messagingCount, setMessageingCount] = useRecoilState(messaingAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const totalNoti = useRecoilValue(totalNotiSelector)

  return (
    <div>
      <button>Home</button>

      <button>My network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Notifications ({notificationCount})</button>

      {/* <button onClick={() => {
        setMessageingCount(c => c+1)}}>Me</button> */}
        <button>Me ({totalNoti})</button>
    </div>
  )
}

export default App
