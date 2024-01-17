const Navbar = () => {
    return(
        <nav className="container">
        <div className="Logo">
          <img src="/images/brand_logo.png" alt="Logo" />
        </div>
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="/about">About</li>
            <li href="/contact">Contact</li>
          </ul>
         <button>login</button>
      </nav>
    );
};

export default Navbar;