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
import { assessmentColumns } from "../Helpers/assessmentDataTableSource";
import { attemptColumns, attemptRows } from "../Helpers/attemptsSource";
import Single from "../pages/Single";
import CreateQuiz from "./CreateQuiz";
import { useSelector } from "react-redux";
import SingleAssessment from "../pages/SingleAssessment";
import { studentInputs, mentorInputs } from "../Helpers/loginSource";
import {
  studentRegisterInputs,
  mentorRegisterInputs,
} from "../Helpers/registerSource";
import { kataInputs, proseInputs } from "../Helpers/createFormSource";
import Trial from "../pages/Trial";
import New from "./New";
import StudentProseAttempt from "../pages/StudentProseAttempt";
import StudentAssignment from "../pages/StudentAssignment";
import SendInvite from "./SendInvite";
import Skata from "./Skata";
import Squiz from "./Squiz";
import Spros from "./Spros";
import StudentKataAttempt from "../pages/StudentKataAttempt";

function App() {
  const mentor = useSelector((state) => state.mentor?.currentUser?.work_id);
  const student = useSelector((state) => state.student?.currentUser?.username);

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route
            path="/mentors/login"
            element={
              mentor ? (
                <TmHome />
              ) : (
                <Login inputs={mentorInputs} type="mentor" />
              )
            }
          />
          <Route
            path="/students/login"
            element={
              student ? (
                <StudentDashboard />
              ) : (
                <Login inputs={studentInputs} type="student" />
              )
            }
          />
          <Route
            path="/students/register"
            element={
              student ? (
                <StudentDashboard />
              ) : (
                <Register inputs={studentRegisterInputs} type="student" />
              )
            }
          />
          <Route
            path="/mentors/register"
            element={
              mentor ? (
                <TmHome />
              ) : (
                <Register inputs={mentorRegisterInputs} type="mentor" />
              )
            }
          />
          {student ? (
            <Route path="students">
              <Route index element={<StudentDashboard />} />
              <Route path="trial" element={<Trial />} />
              <Route path="quiz" element={<QuizPage />} />

              <Route path="assessments">
                <Route index element={<Assignment />} />
                <Route path=":id" element={<StudentAssignment />} />
                <Route path=":id/kata" element={<Skata />} />
                <Route path=":id/quiz" element={<Squiz />} />
                <Route path=":id/pros" element={<Spros />} />
              </Route>
            </Route>
          ) : (
            <Route path="/" element={<Home />} />
          )}
          {mentor ? (
            <Route path="mentors">
              <Route index element={<TmHome />} />

              <Route path="assessments">
                <Route
                  index
                  element={
                    <Assessments columns={assessmentColumns} type="mentor" />
                  }
                />
                <Route path=":id" element={<SingleAssessment />} />
                <Route path="new-assessment" element={<NewAssessment />} />
                <Route path=":id/new-quiz" element={<CreateQuiz />} />
                <Route
                  path=":id/new-kata"
                  element={<New inputs={kataInputs} title="Add New Kata" />}
                />
                <Route
                  path=":id/new-prose"
                  element={<New inputs={proseInputs} title="Add New Prose" />}
                />
                <Route path=":id/new-invite" element={<SendInvite />} />
              </Route>
              <Route path="students">
                <Route index element={<List />} />
                <Route path=":id" element={<Single />} />
                <Route path=":id/prose" element={<StudentProseAttempt />} />
                <Route path=":id/kata" element={<StudentKataAttempt />} />
              </Route>
            </Route>
          ) : (
            <Route path="/" element={<Home />} />
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
