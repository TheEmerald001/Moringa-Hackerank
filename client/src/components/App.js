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
import { attemptColumns, attemptRows } from "../Helpers/attemptsSource";
import Single from "../pages/Single";
import CombineLogin from "../pages/CombineLogin";
import CreateQuiz from "./CreateQuiz";
import { useSelector } from "react-redux";
import SingleAssessment from "../pages/SingleAssessment";
import { studentInputs, mentorInputs } from "../Helpers/loginSource";
import { kataInputs, proseInputs } from "../Helpers/createFormSource";
import Trial from "../pages/Trial";
import New from "./New";
import StudentAttempt from "../pages/StudentAttempt";

function App() {
  const mentor = useSelector((state) => state.mentor?.currentUser?.mentor);
  const student = useSelector((state) => state.student?.currentUser?.student);

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Single
                data={attemptRows}
                columns={attemptColumns}
                type="mentor"
              />
            }
          />
          <Route
            path="register"
            element={student ? <StudentDashboard /> : <Register />}
          />
          <Route
            path="/mentors/login"
            element={mentor ? <TmHome /> : <Login inputs={mentorInputs} />}
          />
          <Route
            path="/students/login"
            element={
              student ? <StudentDashboard /> : <Login inputs={studentInputs} />
            }
          />
          <Route path="access-account" element={<CombineLogin />} />
          {student && (
            <Route path="students">
              <Route index element={<StudentDashboard />} />
              <Route path="trial" element={<Trial />} />
              <Route path="quiz" element={<QuizPage />} />
              <Route path="assignments" element={<Assignment />} />
            </Route>
          )}
          {mentor && (
            <Route path="mentors">
              <Route index element={<TmHome />} />

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
                <Route
                  path=":id/new-kata"
                  element={<New inputs={kataInputs} title="Add New Kata" />}
                />
                <Route
                  path=":id/new-prose"
                  element={<New inputs={proseInputs} title="Add New Prose" />}
                />
              </Route>
              <Route path="grades">
                <Route index element={<List />} />
                <Route path=":studentId" element={<Single />} />
              </Route>
            </Route>
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
