import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assesments from "../pages/Assesments";
import Home from "../pages/Home";
import NewAssesment from "./NewAssesment";
import NewKata from "./NewKata";
import NewSubjective from "./NewSubjective";




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
        <Route path="/newAssesments">
          <Route index element={<NewAssesment />} />
        </Route>
        <Route path="/newKata">
          <Route index element={<NewKata />} />
        </Route>
        <Route path="/newSubjective">
          <Route index element={<NewSubjective/>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
