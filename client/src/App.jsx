import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';

// Components Navbar 
import Navbar from './components/Navbar';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Workouts from './pages/Workouts';
import AddWorkout from './pages/AddWorkout';


function RequireAuth({ children }) {
  const { token } = useContext(UserContext);
  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route
          path="/workouts"
          element={
            <RequireAuth>
              <Workouts />
            </RequireAuth>
          }
        />
        <Route
          path="/add-workout"
          element={
            <RequireAuth>
              <AddWorkout />
            </RequireAuth>
          }
        />

        {/* Redirect root to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}