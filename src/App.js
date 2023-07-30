import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/jobs" element={<Form />}></Route>
        </Routes>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
