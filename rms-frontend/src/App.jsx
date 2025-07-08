import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import UseCaseView from './pages/UsecaseView.jsx';
import DeviceReport from './pages/DeviceReport.jsx';
import RunHoursDashBoard from './pages/usecases/RunHours/index.js';
import Sandbox from './pages/sandbox/Sandbox.jsx'
const App = () => {
  return (
      <Router>
        {/* Routes */}
        <Routes>
          {/* <Route path='/' element={<Dashboard/>}/> */}
          <Route path='/usecase' element={<UseCaseView/>}/>
          <Route path='/report/:deviceId' element={<DeviceReport/>}/>
          {/* <Route path='/usecase/runhours' element={<RunHoursDashBoard/>}/> */}
          <Route path='/' element={<RunHoursDashBoard/>}/>
          <Route path='/sandbox' element={<Sandbox />}></Route>
        </Routes>
      </Router>
  )
}

export default App;
