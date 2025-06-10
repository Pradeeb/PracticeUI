import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import Home from './component/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={`/home`} element={<Home/>} />
        </Routes>
      </Router>

    </>
  )
}
export default App
