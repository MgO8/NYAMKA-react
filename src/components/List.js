import { Link } from "react-router-dom";
import Axios from 'axios';

import { useState, useEffect } from 'react';

export default function List() {
    const [foodList, setFoodList] = useState([]);

    const getFoodList = () => {
        Axios.get("http://localhost:3001/list").then((response) => {
            console.log(response.data.items);
            setFoodList(response.data.items)
        })
    };

    useEffect(() => {
        getFoodList(foodList);
      }, []);

    const itemList = foodList.map(foodItem => {
        return (<li><span>foodItem.id</span></li>)
    })

    return (
        <div className="List">
            <div class="container">
                <div class="container-header">
                    <h1>Daily Food List</h1>
                    <Link to="/new" className="new-button">
                        +Add item
                    </Link>
                </div>
                <div class="index-table-wrapper">
                    <div class="table-head">
                        <span class="id-column">ID</span>
                        <span class="name-column">Item</span>
                        <span class="price-column">Price</span>
                        <span class="date-column">Date</span>
                    </div>
                    <ul class="table-body">
                        <itemList></itemList>
                        {/* <% items.forEach((item)=> { %> */}
                        <li>
                            <div class="item-data">
                                <span class="id-column">
                                    {/* <%= item.id %> */}
                                </span>
                                <span class="name-column">
                                    {/* <%= item.name %> */}
                                </span>
                                <span class="price-column">
                                    {/* <%= item.price %> */}
                                </span>
                                <span class="date-column">
                                    {/* <%= item.date %> */}
                                </span>
                            </div>
                            <div class="item-menu">
                        {/* <form action="/delete/<%= item.id %>" method="post">
                                <input type="submit" value="Delete">
                            </form>
                            <a href="/edit/<%= item.id %>">Edit</a> */}
                            </div>
                        </li>
                        {/* <% }) %> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}