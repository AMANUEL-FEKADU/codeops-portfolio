import React, { useState } from 'react';

function OrderForm() {
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [isExpressDelivery, setIsExpressDelivery] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Order:', {
      customerName,
      deliveryAddress,
      isExpressDelivery,
    });
  };

  const handleReset = () => {
    setCustomerName('');
    setDeliveryAddress('');
    setIsExpressDelivery(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      
      <input
        type="text"
        placeholder="Delivery Address"
        value={deliveryAddress}
        onChange={(e) => setDeliveryAddress(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={isExpressDelivery}
          onChange={(e) => setIsExpressDelivery(e.target.checked)}
        />
        Express Delivery
      </label>

      <button type="submit">Place Order</button>
      <button type="button" onClick={handleReset}>Reset Form</button>
    </form>
  );
}

export default OrderForm;