import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import QuizPage from "../pages/QuizPage";
import StudentDashboard from "../pages/StudentDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<QuizPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
