export default function NotFoundPage() {
  return (
    <div className="container" style={{ textAlign: "center", padding: "4rem 0" }}>
      <h1 style={{ fontSize: "6rem" }}>404</h1>
      <p>Page Not Found</p>
      <a href="/">
        <button
          style={{ marginTop: "1rem", padding: "0.8rem 2rem", borderRadius: "8px", backgroundColor: "#1c1c1c", color: "#fff" }}>
          Go Home
        </button>
      </a>
    </div>
  );
}
