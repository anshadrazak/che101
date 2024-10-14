import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Cause from './Cause';
import Prevention from './Prevention';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/causes' element={<Cause/>}/>
            <Route path='/preventions' element={<Prevention/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
