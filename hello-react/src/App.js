import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import './App.css';

function App() {
  return (
    <div
      className="App"
      style={{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        textAlign:'center'
      }}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
