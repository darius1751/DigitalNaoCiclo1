import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Index } from './pages/Index'

export const App = () => {
  
  return (
    <HashRouter>
      <Routes>
        <Route Component={Index} path='/'/>
      </Routes>
    </HashRouter>
  )
}