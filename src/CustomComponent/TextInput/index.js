import "./index.scss";
export default function TextInput({ id, type, required, placeholder }) {
  return type === "textarea" ? (
    <textarea placeholder={placeholder} />
  ) : (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      required={required}
    />
  );
}
