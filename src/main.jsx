import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Full from './Full/Full.jsx'
import Page1 from './pages/Page1/Page1.jsx'
import Page2 from './pages/Page2/Page2.jsx'
import Page3 from './pages/Page3/Page3.jsx'
import Page4 from './pages/Page4/Page4.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router basename='/Service'>
        <Routes>
          <Route path='/' element={<Full />} />
          <Route path='/Page1' element={<Page1 />} />
          <Route path='/Page2' element={<Page2 />} />
          <Route path='/Page3' element={<Page3 />} />
          <Route path='/Page4' element={<Page4 />} />
        </Routes>
      </Router>
  </React.StrictMode>,
)


