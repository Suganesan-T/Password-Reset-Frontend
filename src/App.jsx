import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import SignIn from './signIn'
import Signup from './Signup'
import Forgetpass from './Forgetpass'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Resetpassword from './Resetpassword'


function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/forget-password' element={<Forgetpass/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/reset-password' element = {<Resetpassword/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
