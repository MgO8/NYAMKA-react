import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="sign">
      <div className="container">
        <div className="panel">
          <h2>Log in</h2>
          <form action="/login" method="POST">
            <p>Email</p>
            <input type="text" name="email" />
            <p>Password</p>
            <input type="password" name="password" />
            <input type="submit" value="Log in" />
            <Link to="/" className="login_btn">
              Go Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}