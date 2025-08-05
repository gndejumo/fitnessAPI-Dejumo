export default function WorkoutCard({ workout }) {
  if (!workout) return null; // Avoid rendering if workout is undefined

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
      background: '#f9f9f9'
    }}>
      <h3>{workout.name || 'Unnamed Workout'}</h3>
      <p><strong>Duration:</strong> {workout.duration ?? 'N/A'} minutes</p>
      <p><strong>Status:</strong> {workout.status || 'N/A'}</p>
      <p>
        <strong>Added:</strong>{' '}
        {workout.createdAt
          ? new Date(workout.createdAt).toLocaleDateString()
          : 'Unknown date'}
      </p>
    </div>
  );
}