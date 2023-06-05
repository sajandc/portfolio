import "./index.scss";
export default function Button({ text, onClick, icon, className = "", type }) {
  return (
    <button type={type} onClick={onClick} className={`button ${className}`}>
      <span>{text} </span>
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
}
