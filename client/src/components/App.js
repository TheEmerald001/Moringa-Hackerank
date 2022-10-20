import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<List />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
