import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import WorkoutCard from '../components/WorkoutCard';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await api.get('/workouts/getMyWorkouts');
        console.log('Workout API response:', res.data);
        setWorkouts(res.data); // Or res.data.data depending on your backend
      } catch (err) {
        console.error('Error fetching workouts:', err);
        alert('Failed to load workouts');
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div>
      <h2>My Workouts</h2>
      <Link to="/add-workout">Add New Workout</Link>
      <div>
        {Array.isArray(workouts) && workouts.length > 0 ? (
          workouts.map(w => (
            <WorkoutCard key={w._id} workout={w} />
          ))
        ) : (
          <p>No workouts found.</p>
        )}
      </div>
    </div>
  );
}
