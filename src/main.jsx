import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Full from './Full/Full.jsx'
import Page1 from './pages/Page1/Page1.jsx'
import Page2 from './pages/Page2/Page2.jsx'
import Page3 from './pages/Page3/Page3.jsx'
import Page4 from './pages/Page4/Page4.jsx'
import Page5 from './pages/Page5/Page5.jsx'
import Page6 from './pages/Page6/Page6.jsx'
import Page7 from './pages/Page7/Page7.jsx'
import Page8 from './pages/Page8/Page8.jsx'
import Page9 from './pages/Page9/Page9.jsx'
import Page10 from './pages/Page10/Page10.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router basename='/Service'>
        <Routes>
          <Route path='/' element={<Full />} />
          <Route path='/Page1' element={<Page1 />} />
          <Route path='/Page2' element={<Page2 />} />
          <Route path='/Page3' element={<Page3 />} />
          <Route path='/Page4' element={<Page4 />} />
          <Route path='/Page5' element={<Page5 />} />
          <Route path='/Page6' element={<Page6 />} />
          <Route path='/Page7' element={<Page7 />} />
          <Route path='/Page8' element={<Page8 />} />
          <Route path='/Page9' element={<Page9 />} />
          <Route path='/Page10' element={<Page10 />} />
        </Routes>
      </Router>
  </React.StrictMode>,
)


