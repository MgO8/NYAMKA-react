import { Link } from "react-router-dom";
import { useState } from 'react';
import Axios from 'axios';

export default function New() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  // const [items, setItems] = useState([]);

  const addItem = () => {
    Axios.post("http://localhost:3001/create", {
      name: name, 
      price: price, 
      date: date
    }).then(() => {
      console.log('success');
    }).catch((e) => {
      console.log(e)
    })
  };

  // const addItem = () => {
  //   const newItem = { name, price, date };
  //   setItems([newItem, ...items]);
  // };

  function handleSubmit(e) {
    e.preventDefault();
    addItem();
  }

  return (
    <div className="new">
      <div className="container">
        <div className="container-header">
          <h1>Add Item</h1>
        </div>
        <div className="item-form-wrapper">
          {/* <form action="/create" method="post">    */}
          <form onSubmit={handleSubmit}>
            <p className="form-label">Food name</p>
            <input value={name} onChange={(e) => setName(e.currentTarget.value)} type="text" required />
            <p className="form-label">Price</p>
            <input value={price} onChange={(e) => setPrice(e.currentTarget.value)} type="number"
              max="1000000" required />
            <p className="form-label" type="text">Date</p>
            <input value={date} onChange={(e) => setDate(e.currentTarget.value)} type="date" required />
            Date
            <button type="submit">Add</button>
          </form>
        </div>
        <Link to="/list" className="cancel-button">
          Go back 
        </Link>
      </div>
    </div>
  );
}