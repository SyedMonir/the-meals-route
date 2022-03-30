import React from 'react';

const OrderList = (props) => {
  const { orders } = props;

  return (
    <aside className="">
      <h2>Order List</h2>
      <h4>Items Ordered: {orders.length}</h4>
    </aside>
  );
};

export default OrderList;
