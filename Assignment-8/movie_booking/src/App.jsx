import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Registration_form'
import Detail_page from './components/Detail_page'
import Confirmation from './components/Confirmation'
import Registration_form from './components/Registration_form'

function App() {
  return (
    
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail-page' element={<Detail_page/>}/>
      <Route path='/form' element={<Registration_form/>}/>
      <Route path='/confirmation' element={<Confirmation/>}/>
     </Routes>
    
  )
}

export default App
