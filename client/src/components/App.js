import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assesments from "../pages/Assesments";
import Home from "../pages/Home";
import TmHome from "../pages/TmHome";
import NewAssessment from "./NewAssessment";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/assessments">
          <Route index element={<Assesments />} />
        </Route>
        
        <Route path="/newAssessment">
          <Route index element={<NewAssessment/>} />
        </Route>
        <Route path="/home">
          <Route index element={<TmHome/>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
