import "./navbar.css";
const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <a href="#kore">
          {" "}
          <img src="/Assets/mile2-aseets/icons/1.svg" alt="" />
          YENİ! Kore
        </a>
      </li>
      <li>
        <a href="#pizza">
          {" "}
          <img src="/Assets/mile2-aseets/icons/2.svg" alt="" />
          Pizza
        </a>
      </li>
      <li>
        <a href="#burger">
          {" "}
          <img src="/Assets/mile2-aseets/icons/3.svg" alt="" />
          Burger
        </a>
      </li>
      <li>
        <a href="#kizartmalar">
          {" "}
          <img src="/Assets/mile2-aseets/icons/4.svg" alt="" />
          Kızartmalar
        </a>
      </li>
      <li>
        <a href="#fastfood">
          {" "}
          <img src="/Assets/mile2-aseets/icons/5.svg" alt="" />
          Fast Food
        </a>
      </li>
      <li>
        <a href="#icecek">
          {" "}
          <img src="/Assets/mile2-aseets/icons/6.svg" alt="" />
          Gazlı İçecek
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
