import "./index.scss";
export default function TextInput({
  id,
  type,
  required,
  placeholder,
  onChange,
  value,
}) {
  return type === "textarea" ? (
    <textarea
      placeholder={placeholder}
      onChange={onChange}
      id={id}
      value={value}
    />
  ) : (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
}
