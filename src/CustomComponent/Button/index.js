import "./index.scss";
export default function Button({ text, onClick, icon, className = "" }) {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      <span>{text} </span>
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
}
