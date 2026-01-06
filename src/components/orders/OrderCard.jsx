export default function OrderCard({ order }) {
  const total = order.items.reduce((sum, item) => {
    return (sum += item.quantity);
  }, 0);

  return (
    <div>
      <p>Заказ №{order.id}</p>
      <p>Дата оформления заказа: {order.date}</p>
      <p>Покупатель: {order.customerInfo?.name}</p>
      <p>{total} ед. товара</p>
      <p>Сумма: {order.total.toFixed(2)}$</p>
      {/* <button>Посмотреть детали</button> */}
    </div>
  );
}
