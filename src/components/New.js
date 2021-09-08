import { Link } from "react-router-dom";

export default function New() {
  return (
    <div className="new">
      <div class="container">
        <div class="container-header">
          <h1>Add Item</h1>
        </div>
        <div class="item-form-wrapper">
          {/*             
            <form action="/create" method="post">
                <p class="form-label">Food name</p>
                <input name="itemName" type="text" required>
                <p class="form-label">Price</p>
                <input name="itemPrice" type="number" max="1000000" required>
                <p class="form-label" type="text">Date</p>
                <input name="date" type="date" required>
                <input type="submit" value="Add">
            </form> */}
        </div>
        <Link to="/list" className="cancel-button">
          Go back
        </Link>
      </div>
    </div>
  );
}