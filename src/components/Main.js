import MainImage from "../img/main_image1.png";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="main">
      <section className="main_wrapper">
        <div className="main_detail">
          <h2 className="subtitle">A Nyam-Nyam list app</h2>
          <h1 className="title">NYAMKA</h1>
          <p className="description">
            NYAMKA lets you create and manage your daily food list easily.
          </p>
          <Link to="/list" className="index_button">
              View your list
          </Link>
          <Link to="/about" className="index_button">
            About
          </Link>
        </div>
        <div className="main_image">
          <img src={MainImage} alt="Main" />
        </div>
      </section>
    </div>
  );
}