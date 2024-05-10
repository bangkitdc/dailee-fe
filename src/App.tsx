import { useAuth } from '@contexts';
import { Assessment } from '@pages/Assessment';
import { Home } from '@pages/Home';
import { Login } from '@pages/Login';
import { Planner } from '@pages/Planner';
import { Profile } from '@pages/Profile';
import { Register } from '@pages/Register';
import { Social } from '@pages/Social';
import { HealthyMind } from '@pages/HealthyMind';
import { Module } from '@pages/Module';
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  const { user } = useAuth();

  const ProtectedRoute = ({ isAssessment, element }: { isAssessment?: boolean, element: React.ReactNode }) => {
    if (user) {
      if (!user.already_test && !isAssessment) {
        return <Navigate to="/assessment" replace />;
      }

      return element;
    }
  };

  const UnprotectedRoute = ({ element }: { element: React.ReactNode }) => {
    return user ? <Navigate to="/" replace /> : element;
  };

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute element={<Home />} />} />
      <Route
        path="/planner"
        element={<ProtectedRoute element={<Planner />} />}
      />
      <Route path="/social" element={<ProtectedRoute element={<Social />} />} />
      <Route
        path="/profile"
        element={<ProtectedRoute element={<Profile />} />}
      />
      <Route
        path="/assessment"
        element={<ProtectedRoute isAssessment={true} element={<Assessment />} />}
      />
      <Route
        path="/healthymind"
        element={<ProtectedRoute element={<HealthyMind/>} />}
      />
      <Route
        path="/module"
        element={<ProtectedRoute element={<Module/>} />}
      />

      <Route
        path="/login"
        element={<UnprotectedRoute element={<Login />} />}
      />
      <Route
        path="/register"
        element={<UnprotectedRoute element={<Register />} />}
      />
    </Routes>
  );
}

export default App
