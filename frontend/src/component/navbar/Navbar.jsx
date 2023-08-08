import "./navbar.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useCrypto } from "../crptoContext/cryptoContect";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { setSelectedCrypto } = useCrypto();
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchAllStock = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/stocks");
        console.log(res.data); // Log the fetched data to the console
        setStocks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllStock();
  }, []);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">
          <h1>STOCKONCE</h1>
        </div>
      </div>
      <div className="center">
        <span className="centerpoint currency">INR</span>
        <div className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
          <span className="centerpoint cryptoName" onClick={toggleDropdown}>
            BTC
          </span>
          <div className="dropdownContent">
      
          {stocks.map((stock) => (
            <Link to={`/stock/${stocks._id}`} key={stocks._id}
            onClick={() => {setSelectedCrypto(stock)}}>
              <span>{stock.base_unit.toUpperCase()}</span>
              </Link>
            ))}
         
           
          </div>
        </div>


        <span className="centerpoint buy">BUY BTC</span>
      </div>
      <div className="right">
        <span className="time">60</span>
        <span className="socialIcon">Telegram</span>
        <div className="toggle-switch">
          <label className={`switch ${isChecked ? "checked" : ""}`}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleToggle}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
