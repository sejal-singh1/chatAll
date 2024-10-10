import {lazy} from "react";
import './App.css'
import {BrowserRouter,Routes,Route}from "react-router-dom";
const Home =lazy(() =>  import ('./pages/home'));
const Login =lazy(() =>  import ('./pages/login'));
const Chat =lazy(() =>  import ('./pages/chat'));
const Group =lazy(() =>  import ('./pages/group'));



function App() {
  

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
      <Route path="/chat/chat:Id" element={<Chat/>}/>
      <Route path="/group" element={<Group/>}/>
      <Route path="/login" element={<Login/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
