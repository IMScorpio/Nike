const Navbar = () => {
  return (
    <div>
       <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo"  />
        </div>
        <ul>
          <a href=""><li href="#">Menu</li></a>
          <a href="#"><li href="#">About</li></a>
          <a href="#"><li href="#">Location</li></a>
          <a href="#"><li href="#">Contact</li></a>
        </ul>
        <div>
          <button><a href="">Signup</a></button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
