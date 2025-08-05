import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function AddWorkout() {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [status, setStatus] = useState('incomplete');
  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await api.post('/workouts/addWorkout', { name, duration, status });
      alert('Workout added!');
      navigate('/workouts');
    } catch (err) {
      alert('Failed to add workout');
    }
  };

  return (
    <form onSubmit={handleAdd}>
      <h2>Add Workout</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Workout Name" required />
      <input value={duration} onChange={e => setDuration(e.target.value)} placeholder="Duration (min)" type="number" required />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </select>
      <button type="submit">Add Workout</button>
    </form>
  );
}
