import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";
import Single from "../pages/Single";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Single />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
