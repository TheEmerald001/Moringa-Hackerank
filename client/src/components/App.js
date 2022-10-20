import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assesments from "../pages/Assesments";
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
        <Route path="/assesments">
          <Route index element={<Assesments />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
