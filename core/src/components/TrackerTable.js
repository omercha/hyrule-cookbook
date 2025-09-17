import './TrackerTable.css';

const TrackerTable = ({ recipes, completedIds, toggleCompletion }) => {
  return (
    <table className="tracker-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Recipe Image</th>
          <th>Recipe Name</th>
          <th>Cooked?</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map(recipe => {
          const isCompleted = completedIds.has(recipe.id);
          return (
            <tr
              key={recipe.id}
              className={isCompleted ? 'completed-row' : ''}
              onClick={() => toggleCompletion(recipe.id)}
            >
              <td>#{recipe.id}</td>
              <td><img src={recipe.image} alt={recipe.name} className="tracker-table-image" /></td>
              <td>{recipe.name}</td>
              <td>
                <input type="checkbox" checked={isCompleted} readOnly />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TrackerTable;