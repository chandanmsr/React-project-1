const Navbar = () => {
    return(
        <nav className="container">
        <div className="Logo">
          <img src="/images/brand_logo.png" alt="Logo" />
        </div>
          <ul>
            <li href="#">Home</li>
            <div class="dropdown">
              <button class="dropbtn">Categories</button>
              <div class="dropdown-content">
                <a href="#">Dresses</a>
                <a href="#">Accessories</a>
                <a href="#">Eyewear</a>
              </div>
            </div>
            <li href="/about">About</li>
            <li href="/contact">Contact</li>
          </ul>
         <button>login</button>
      </nav>
    );
};

export default Navbar;