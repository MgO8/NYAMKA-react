import { Link, useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { editFoodItem } from '../store/listSlice.middlewares'

export default function Edit() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [itemEdited, setItemEdited] = useState(false);

    const params = useParams();
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(editFoodItem({ id: params.id, name, price, date }))
        setItemEdited(true)
    }

    const foodListItem = useSelector((state) =>
        state.list.items.find((item) => item.id === Number(params.id))
    );

    useEffect(() => {
        if (foodListItem) {
            setName(foodListItem.name)
            setPrice(foodListItem.price)
            setDate(foodListItem.date)
        }
    }, [foodListItem]);

    if (!foodListItem) {
        return (<p>Item not found</p>)
    }

    if (itemEdited) {
        return (<Redirect to="/list"></Redirect>)
    }

    return (
        <div className="container">
            <div className="container-header">
                <h1>Edit Item</h1>
            </div>
            <div className="item-form-wrapper">
                <p className="form-label">Item</p>
                <div className="item-form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <p className="form-label">Food name</p>
                        <input value={name} onChange={(e) => setName(e.currentTarget.value)} type="text" required />
                        <p className="form-label">Price</p>
                        <input value={price} onChange={(e) => setPrice(e.currentTarget.value)} type="number"
                            max="1000000" required />
                        <p className="form-label" type="text">Date</p>
                        <input value={date} onChange={(e) => setDate(e.currentTarget.value)} type="date" required />
                        <button type="submit">Edit</button>
                    </form>
                </div>
            </div>
            <Link to="/list" className="cancel-button">
                Go back
            </Link>
        </div>
    );
}