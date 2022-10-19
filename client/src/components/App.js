import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
