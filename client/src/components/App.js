import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Assignment from "../pages/Assignment";

import Assesments from "../pages/Assesments";

import Home from "../pages/Home";

import QuizPage from "../pages/QuizPage";
import StudentDashboard from "../pages/StudentDashboard";

import List from "../pages/List";
import Single from "../pages/Single";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="student">
            <Route index element={<StudentDashboard />} />
            <Route path="quiz" element={<QuizPage />} />
            <Route path="assignment" element={<Assignment />} />
          </Route>
        </Route>
        <Route path="mentor">
          <Route index element={<Assesments />} />
          <Route path="grades">
            <Route index element={<List />} />
            <Route path=":studentId" element={<Single />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
