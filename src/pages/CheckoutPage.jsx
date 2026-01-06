import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema } from "../utils/validationSchemas";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../redux/slices/ordersSlice";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = (data) => {
    const total = cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const order = {
      id: Number(new Date()),
      customerInfo: data,
      items: cartItems,
      total: total,
      date: new Date().toLocaleDateString("ru-RU", options),
    };
    dispatch(addOrder(order));
    dispatch(clearCart());
    navigate("/orders");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>ФИО:</label>
          <input {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input {...register("email")} type="email" />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label>Адрес:</label>
          <textarea {...register("address")} />
          {errors.address && <span>{errors.address.message}</span>}
        </div>

        <div>
          <label>Номер телефона:</label>
          <input {...register("phone")} />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>

        <button type="submit">Сделать заказ</button>
      </form>
    </div>
  );
}
