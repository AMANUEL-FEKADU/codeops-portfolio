import React, { useReducer } from "react";

const initialForm = { name: "", phone: "", area: "Bole" };

function formReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialForm;
    default:
      return state;
  }
}

function OrderForm() {
  const [order, dispatch] = useReducer(formReducer, initialForm);

  function handlechange(e) {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  }

  const phoneRegex = /^(?:\+251|0)[79]\d{8}$/;
  const valid = phoneRegex.test(order.phone);

  return (
    <main className="formain">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={order.name} onChange={handlechange} /><br />
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" id="phone" value={order.phone} onChange={handlechange} /><br />
        {order.phone && !valid && <span style={{ color: "red" }}>Enter valid phone</span>}<br />
        <label htmlFor="area">Area</label>
        <select name="area" value={order.area} onChange={handlechange}>
          <option value="Bole">Bole</option>
          <option value="Piyassa">Piyassa</option>
          <option value="Mexico">Mexico</option>
          <option value="Megenagna">Megenagna</option>
        </select><br />
        <button className={valid ? "bt" : "btn"} disabled={!valid}>submit</button>
      </form>
    </main>
  );
}

export default OrderForm;