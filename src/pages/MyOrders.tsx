import OrderItem from "../components/OrderItem";

const orders = [
  {
    id: 1,
    total: 300,
    date: new Date("2023-05-04"),
    items: [
      {
        id: 23,
        name: "Chicken Burger",
        thumb:
          "https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg",
      },
      {
        id: 25,
        name: "Beef Burger",
        thumb:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMUzCpt_4SXIt1TFv9aGP76RbwvPabzwmM-o4slpqnJmsmIaDokmsg8TulyJAYurQCM0&usqp=CAU",
      },
    ],
  },
];

const MyOrders = () => {
  return (
    <>
      <div className="flex justify-center w-full pt-1">
        <h1 className="text-3xl">My Orders</h1>
      </div>
      <div className="flex flex-col items-center mt-20">
        {orders.map((order) => (
          <OrderItem
            number={order.id}
            items={order.items}
            total={250}
            date={new Date()}
          />
        ))}
      </div>
    </>
  );
};

export default MyOrders;
