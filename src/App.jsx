import './App.css'
import { Route,Routes } from 'react-router-dom';
import Login from './components/login';
import Jobs from './components/jobs';
import Home from './components/home';
import Notfound from './components/not_found';
import ProtectedRout from './components/protectedRout';

const App = ()=>{

  return(
    <Routes>
      <Route path = "/" element={<ProtectedRout Component={Home}/>}></Route>

      <Route path = "/login" element={<Login/>}></Route>

      <Route path = "/jobs" element={<ProtectedRout Component={Jobs}/>}></Route>

      <Route path='/*' element={<Notfound/>}></Route>
    </Routes>
  )
}

export default App;