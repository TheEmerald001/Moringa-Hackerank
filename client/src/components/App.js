import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Assignment from "../pages/Assignment";

import Assesments from "../pages/Assesments";

import Home from "../pages/Home";
import QuizPage from "../pages/QuizPage";
import StudentDashboard from "../pages/StudentDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Assignment />} />
        </Route>
        <Route path="/assesments">
          <Route index element={<Assesments />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
