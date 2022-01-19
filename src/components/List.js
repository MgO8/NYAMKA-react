
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

import { deleteItem, fetchFoodList } from '../store/listSlice.middlewares'

export default function List() {
    const dispatch = useDispatch();
    const foodList = useSelector((state) => state.list.items);

    useEffect(() => {
        dispatch(fetchFoodList());
    }, []);

    const itemList = foodList.map(foodItem => {
        return (<div key={foodItem.id} className="item-data">
            <span className="id-column">
                {foodItem.id}
            </span>
            <span className="name-column">
                {foodItem.name}
            </span>
            <span className="price-column">
                {foodItem.price}
            </span>
            <span className="date-column">
                {foodItem.date}
            </span>
            <div className="item-menu">
                <button onClick={() => dispatch(deleteItem(foodItem.id))}>Delete</button>
                <Link to={`/edit/${foodItem.id}`} >
                    Edit
                </Link>
            </div>
        </div>)
    })

    return (
        <div className="List">
            <div className="container">
                <div className="container-header">
                    <h1>Daily Food List</h1>
                    <Link to="/new" className="new-button">
                        +Add item
                    </Link>
                </div>
                <div className="index-table-wrapper">
                    <div className="table-head">
                        <span className="id-column">ID</span>
                        <span className="name-column">Item</span>
                        <span className="price-column">Price</span>
                        <span className="date-column">Date</span>
                    </div>
                    <ul className="table-body">
                        {itemList}
                        <li>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}