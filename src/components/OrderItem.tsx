const OrderItem = ({ number, total, date, items }) => {
  let item = items[Math.floor(Math.random() * items.length)];
  return (
    <div className="flex justify-evenly border-gray-100 border-2 rounded-lg shadow-md max-w-xl overflow-hidden h-36">
      <img className="h-full" src={item.thumb} alt={`order number ${number}`} />
      <div className="flex flex-col gap-3 justify-between py-5 px-3">
        <h1 className="text-lg">Order # {number}</h1>
        <div className="flex flex-col">
          <span>{date.toString()}</span>
          <span>total: $ {total}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
