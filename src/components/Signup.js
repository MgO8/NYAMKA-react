import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div class="sign">
      <div class="container">
        <div class="sign_panel">
          <h2 class="sign_panel_title">Sign up</h2>
          <form>
            <p class="sign_panel_text">Username</p>
            <input type="text" />
            <p class="sign_panel_text">Email</p>
            <input type="text" />
            <p class="sign_panel_text">Password</p>
            <input type="password" />
            <input type="submit" value="Sign up" />
            <Link to="/" className="login_btn">
              Go Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}