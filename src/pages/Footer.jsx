const Footer = () => {
  return (
    <footer className="footer footer-center lg:p-10 p-5 bg-gray-950 text-primary-content">
      <div>
        <a href="#" className="flex items-center">
          <img src="./images/logo.png" alt="Logo" className="w-3/12" />
          <span className="text-white ms-4 text-2xl font-bold">
            Fruit Burst
          </span>
        </a>
      </div>
      <div className="">
        <ul className="menu menu-horizontal text-md px-1 text-white font-bold grid grid-cols-3 lg:grid-cols-6">
          <li>
            <a className="#">Home</a>
          </li>
          <li>
            <a className="#">About Us</a>
          </li>
          <li>
            <a className="#">Shop</a>
          </li>
          <li>
            <a className="#">All Fruit</a>
          </li>
          <li>
            <a className="#">Support</a>
          </li>
          <li>
            <a className="#">My Account</a>
          </li>
        </ul>
      </div>
      <div>
        <div className="grid lg:grid-cols-6 lg:text-4xl text-3xl grid-cols-6 gap-4">
          <a href="#">
            <i className="fa-brands fa-square-facebook"></i>{" "}
          </a>
          <a href="#">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-discord"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
