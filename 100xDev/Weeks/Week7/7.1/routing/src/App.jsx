import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/landing'));
//Here we are using lazy loading to load the components only when they are needed.
// We need to use Suspense api bcz lazy loading is async and it takes time to load the component.
function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return <div>
    <div>
      <button onClick={() => {
        navigate('/');
      }}>Landing</button>
      <button onClick={() => {
        navigate('/dashboard');
      }}>Dashboard</button>
    </div>
  </div>
}

export default App
