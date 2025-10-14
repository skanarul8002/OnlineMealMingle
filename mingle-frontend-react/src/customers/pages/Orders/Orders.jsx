import React, { useEffect } from "react";
import OrderCard from "../../components/Order/OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getUsersOrders } from "../../../State/Customers/Orders/Action";

const Orders = () => {
  const { order, auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUsersOrders(jwt));
    }
  }, [jwt, dispatch]);

  if (order.loading) {
    return (
      <div className="flex justify-center py-10">
        <p>Loading your orders...</p>
      </div>
    );
  }

  if (!order.orders.length) {
    return (
      <div className="flex justify-center py-10">
        <p>No past orders found.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-xl text-center py-7 font-semibold">My Orders</h1>
      <div className="space-y-5 w-full lg:w-1/2">
        {order.orders.flatMap((ord) =>
          ord.items.map((item) => (
            <OrderCard
              key={`${ord.id}-${item.id}`}
              status={ord.orderStatus}
              order={item}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
