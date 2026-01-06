export default function ErrorMessage({ message }) {
  return (
    <div className="error-message" style={{ color: "red" }}>
      ⚠️ {message}
    </div>
  );
}
