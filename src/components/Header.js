export default function Header() {
  return (
    <header className="header">
      <div className="header_navbar">
        <div className="header_navbar_logo">
          <a className="header-logo" href="/">
            NYAMKA
          </a>
          <p className="header_welcome">
            {/* Welcome, <%= locals.username %> */}
          </p>
        </div>
        <div className="header_login_logout">
          <a className="login_logout" href="/logout">
            Log out
          </a>
          <a href="/signup" className="signup login_logout">
            Sign up
          </a>
          <a className="login_logout" href="/login">
            Log in
          </a>
        </div>
      </div>
    </header>
  );
}