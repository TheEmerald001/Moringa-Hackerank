import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assessments from "../pages/Assessments";
import Home from "../pages/Home";
import TmHome from "../pages/TmHome";
import NewAssessment from "./NewAssessment";

import List from "../pages/List";
import Assignment from "../pages/Assignment";
import Register from "../pages/signup/Register";
import Login from "../pages/login/Login";

import QuizPage from "../pages/QuizPage";
import StudentDashboard from "../pages/StudentDashboard";
import {
  assessmentColumns,
  assessmentRows,
} from "../Helpers/assessmentDataTableSource";
import Single from "../pages/Single";
import CombineLogin from "../pages/CombineLogin";
import CreateQuiz from "./CreateQuiz";
import { useSelector } from "react-redux";
import SingleAssessment from "../pages/SingleAssessment";
import { studentInputs, mentorInputs } from "../Helpers/loginSource";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="access-account" element={<CombineLogin />} />
          <Route path="students">
            <Route index element={<StudentDashboard />} />
            <Route path="login" element={<Login inputs={studentInputs} />} />
            <Route path="quiz" element={<QuizPage />} />
            <Route path="assignments" element={<Assignment />} />
          </Route>
        </Route>
        <Route path="mentors">
          <Route index element={<TmHome />} />
          <Route path="login" element={<Login inputs={mentorInputs} />} />
          <Route path="assessments">
            <Route
              index
              element={
                <Assessments
                  data={assessmentRows}
                  columns={assessmentColumns}
                  type="mentor"
                />
              }
            />
            <Route path=":id" element={<SingleAssessment />} />
            <Route path="new-assessment" element={<NewAssessment />} />
            <Route path=":id/new-quiz" element={<CreateQuiz />} />
          </Route>
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
