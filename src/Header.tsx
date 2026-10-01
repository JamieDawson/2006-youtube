const Header = () => {
  return (
    <header className="header">
      <div className="logo">Youtube</div>

      <div className="header-right">
        <div className="account-links">
          <a href="#">Sign up</a>
          <a href="#">My Account</a>
          <a href="#">History</a>
          <a href="#">Help</a>
        </div>

        <div className="search">
          <input type="text" placeholder="Search videos" />
          <button>Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
