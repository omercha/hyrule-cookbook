import './ProgressBar.css';

const ProgressBar = ({ completed, total }) => {
  const remaining = total - completed;
  const percentage = total > 0 ? Math.round((completed / total)*100) : 0;

  return (
    <div className="tracker-summary">
      <div className="summary-stats">
        <div className="summary-item">
          <span className="summary-value">{completed}</span>
          <span className="summary-label">Cooked</span>
        </div>
        <div className="summary-item">
          <span className="summary-value">{remaining}</span>
          <span className="summary-label">Remaining</span>
        </div>
        <div className="summary-item">
          <span className="summary-value">{total}</span>
          <span className="summary-label">Total</span>
        </div>
      </div>
      <div className="summary-progress-bar-container">
        <div className="summary-progress-bar" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
