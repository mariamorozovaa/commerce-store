import { useSelector } from "react-redux";
import OrderCard from "../components/orders/OrderCard";

export default function OrdersPage() {
  const orders = useSelector((state) => state.orders.orders);
  if (orders.length === 0) return <p>У вас нет заказов</p>;

  return (
    <div>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
