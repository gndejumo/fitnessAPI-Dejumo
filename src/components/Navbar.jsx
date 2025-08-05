import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export default function Navbar() {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      background: '#333',
      color: 'white'
    }}>
      <h2>🏋️ Fitness Tracker</h2>
      <div>
        {token ? (
          <>
            <Link to="/workouts" style={linkStyle}>My Workouts</Link>
            <Link to="/add-workout" style={linkStyle}>Add Workout</Link>
            <button onClick={handleLogout} style={{ marginLeft: '1rem' }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/register" style={linkStyle}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const linkStyle = {
  color: 'white',
  marginRight: '1rem',
  textDecoration: 'none'
};