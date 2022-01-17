import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useState } from 'react';

import { addItem } from '../store/listSlice.middlewares'


export default function New() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addItem({ name, price, date }))
  }

  return (
    <div className="new">
      <div className="container">
        <div className="container-header">
          <h1>Add Item</h1>
        </div>
        <div className="item-form-wrapper">
          <form onSubmit={handleSubmit}>
            <p className="form-label">Food name</p>
            <input value={name} onChange={(e) => setName(e.currentTarget.value)} type="text" required />
            <p className="form-label">Price</p>
            <input value={price} onChange={(e) => setPrice(e.currentTarget.value)} type="number"
              max="1000000" required />
            <p className="form-label" type="text">Date</p>
            <input value={date} onChange={(e) => setDate(e.currentTarget.value)} type="date" required />
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