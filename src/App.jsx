import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import './index.css';
import Homepage from "./homepage";
import Loader from "./loader";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3500); 

    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return <Loader />;
  }

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
