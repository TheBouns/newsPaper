import './App.css';
import Home from './components/Home/Home';
import {Form} from './components/Form/Form';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from './components/News/New';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/news' element={<News/>}/>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
