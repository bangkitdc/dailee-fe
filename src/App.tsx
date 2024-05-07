import { useAuth } from '@contexts';
import { Home } from '@pages/Home';
import { Login } from '@pages/Login';
import { Planner } from '@pages/Planner';
import { Profile } from '@pages/Profile';
import { Register } from '@pages/Register';
import { Social } from '@pages/Social';
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  const { user } = useAuth();

  const ProtectedRoute = ({ element }: { element: React.ReactNode }) => {
    return user ? element : <Navigate to="/login" replace />;
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
