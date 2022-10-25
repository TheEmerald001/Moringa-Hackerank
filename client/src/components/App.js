import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assesments from "../pages/Assesments";
import Home from "../pages/Home";
import NewAssesment from "./NewAssesment";
import NewKata from "./NewKata";
import NewSubjective from "./NewSubjective";

import List from "../pages/List";
import Assignment from "../pages/Assignment";
import Register from "../pages/signup/Register";
import Login from "../pages/login/Login";
import QuizPage from "../pages/QuizPage";
import StudentDashboard from "../pages/StudentDashboard";

import Single from "../pages/Single";
import SendMail from "./SendMail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="students">
            <Route index element={<StudentDashboard />} />
            <Route path="quiz" element={<QuizPage />} />
            <Route path="assignments" element={<Assignment />} />
          </Route>
        </Route>
        <Route path="mentors">
          <Route index element={<Assesments />} />
          <Route path="newquiz" element={<NewAssesment />} />
          <Route path="newkata" element={<NewKata />} />
          <Route path="newsubjective" element={<NewSubjective />} />
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
