import './Header.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header() {
    return (
      <header className='border-bottom sticky-top bg-light'>
        <ul className='navbar-nav d-sm-flex flex-row justify-content-around p-2 position-sticky top-0'>
          <li className='nav-item px-3 flex-column '><i className="bi-bus-front  display-4 "></i>Bus</li>
          <li className='nav-item px-3 flex-column '><i className="bi-cart3 display-4"></i>Shop</li>
          <li className='nav-item px-3 flex-column '><i className="bi-hospital  display-4 "></i>Hospital</li>
          <li className='nav-item px-3 flex-column '><i className="bi-book display-4 "></i>School</li>
        </ul>
      </header>
      );
}