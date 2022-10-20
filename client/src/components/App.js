import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../pages/signup/SignUp";
import Login from "../pages/login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
