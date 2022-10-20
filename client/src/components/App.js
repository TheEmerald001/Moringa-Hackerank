import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assesments from "../pages/Assesments";
import Home from "../pages/Home";
import List from "../pages/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<List />} />
        </Route>
        <Route path="/assesments">
          <Route index element={<Assesments />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
