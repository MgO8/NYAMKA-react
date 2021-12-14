import { Link } from "react-router-dom";
import Axios from 'axios';
import { v4 as uuidv4 } from "uuid";

import New from './New.js';

import { useState, useEffect } from 'react';

export default function List() {
    const [foodList, setFoodList] = useState([]);

    // в редакс запихнуть потом 
    const addItem = ({ name, price, date }) => {
        Axios.post("http://localhost:3001/create", {
            name: name,
            price: price,
            date: date
        }).then(() => {
            setFoodList((list) => [...list, {
                name: name,
                price: price,
                date: date,
                id: Math.random()*1000000
            }])
            console.log('success');
        }).catch((e) => {
            console.log(e)
        })
    };

    const getFoodList = () => {
        Axios.get("http://localhost:3001/list").then((response) => {
            setFoodList(response.data.items)
        })
    };

    const deleteItem = (e, id) => {
        const itemId = e.currentTarget.getAttribute("meow-id")
        e.preventDefault();
        Axios.delete(`http://localhost:3001/delete/${itemId}`)
        .then(res => {
          console.log(res.data);
        //   здесь заместо консол лога нужно сделать так, чтобы страница после удаления перерендерилась
        }).catch(err => {
          console.warn(err.warn);
        });
      };

    useEffect(() => {
        getFoodList(foodList);
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
            <div class="item-menu">
            <button onClick={deleteItem} meow-id={foodItem.id}>Delete</button>
            </div>
        </div>)
    })

    return (
        <div className="List">
            <New onItemCreate={addItem}></New>
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
                            <div class="item-menu">
                                {/* <form action="/delete/<%= item.id %>" method="post">
                                <input type="submit" value="Delete">
                            </form>
                            <a href="/edit/<%= item.id %>">Edit</a> */}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}