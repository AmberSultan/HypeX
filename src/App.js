import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Order from './components/Order/Order';
import Profile from './components/Profile/Profile'

function App() {
  return (
    <div className="App">
     
    <Router>
      <Routes>
        <Route path="/" element={<Order/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
