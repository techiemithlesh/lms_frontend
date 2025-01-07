import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Subjects from "./pages/Subjects";
import Quizzes from "./pages/Quizzes";
import PlayEarn from "./pages/PlayEarn";
import Profile from "./pages/Profile";
import QuizPage from "./pages/QuizPage";
import LecturePage from "./pages/LecturePage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <AuthProvider>
      <Router>
            <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          {/* <Route path="/" element={ */}
          {/* <ProtectedRoute> */}
          {/* <div className="min-h-screen bg-gray-50"> */}
            {/* <Routes> */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/play-earn" element={<PlayEarn />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/quiz/:quizId" element={<QuizPage />} />
              <Route path="/lecture/:lectureId" element={<LecturePage />} />
            {/* </Routes> */}
          {/* </div> */}
          {/* </ProtectedRoute> */}
          {/* } /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
