export default function HomePage() {
  return (
    <div className="container" style={{ textAlign: "center", padding: "4rem 0" }}>
      <h1>Добро пожаловать на ShopHub</h1>
      <p>Здесь вы найдете все необходимое!</p>
      <a href="/products">
        <button
          style={{ marginTop: "1rem", padding: "0.8rem 2rem", borderRadius: "8px", backgroundColor: "#1c1c1c", color: "#fff" }}>
          Перейти к товарам
        </button>
      </a>
    </div>
  );
}
